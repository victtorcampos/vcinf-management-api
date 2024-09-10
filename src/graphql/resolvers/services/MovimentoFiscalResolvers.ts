import { PrismaClient } from "../../../config/prisma-client";
import { GraphQLUpload } from "graphql-upload-ts";
import { promises as fs, createWriteStream, createReadStream, statSync } from 'fs';
import * as unzipper from 'unzipper';
import path from 'path';
import CsvReadableStream from 'csv-reader';
import { pipeline } from 'stream';
import { promisify } from 'util';
// Adicionado para controlar concorrência de arquivos

const pipe = promisify(pipeline);

// Limita a quantidade de arquivos abertos simultaneamente
const MAX_CONCURRENT_FILES = 100;
async function processInBatches(files: string[], processFile: (file: string) => Promise<any>, batchSize: number = MAX_CONCURRENT_FILES) {
    const results: any[] = [];
    for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(processFile));
        results.push(...batchResults);
    }
    return results;
}

interface Nota {
    dataEmissao: Date;
    serie: string;
    numero: string;
    chave: string;
    protocolo: string;
    dataAutorizacao: Date;
    situacao: string;
    valor: number;
    xml: boolean | null;
}

interface Objeto {
    inscricao: string;
    cnpj: string;
    nome: string;
    notas: Nota[];
}

export const MovimentoFiscalResolvers = {
    Upload: GraphQLUpload,
    Mutation: {
        getExcelSefaz: async (_: any, { data }: { data: any }, context: { prisma: PrismaClient, req: any }) => {
            const { periodo, tipoDoc, fileExcelZip, fileXmlZip } = data;

            try {
                const fileExcelZipLocal = await salvarArquivo(fileExcelZip);
                const fileXmlZipLocal = await salvarArquivo(fileXmlZip);

                const arquivosExtraidos = await extrairArquivos([fileExcelZipLocal, fileXmlZipLocal]);

                const arquivosXls = arquivosExtraidos.filter(file => path.extname(file).toLowerCase() === '.csv');
                const arquivosXml = arquivosExtraidos.filter(file => path.extname(file).toLowerCase() === '.xml');

                // Processamento dos arquivos XML com controle de concorrência manual
                const chavesArray: string[] = await processInBatches(arquivosXml, lerXml);

                const objeto: Objeto = await processCsv(arquivosXls[0]);

                chavesArray.forEach((chave: string) => {
                    objeto.notas.forEach((nota: Nota) => {
                        if (nota.chave === chave) {
                            nota.xml = true;
                        }
                    });
                });

                objeto.notas.sort((a, b) => a.dataEmissao.getTime() - b.dataEmissao.getTime());
                //objeto.notas.sort((a, b) => Number(a.xml) - Number(b.xml));


                return objeto;
            } catch (error) {
                console.error(error);
                return "Erro ao processar arquivos.";
            }
        }
    },
};

const lerXml = async (filePath: string): Promise<string> => {
    try {
        const caminhoAbsoluto = path.resolve(filePath);
        await fs.access(caminhoAbsoluto); // Verifica se o arquivo existe

        const data = await fs.readFile(caminhoAbsoluto, 'utf8');
        const match = data.match(/Id="([^<]+)">/);
        if (match) {
            return match[1].replace(/NFe/, "");
        } else {
            return ""; // Sempre retorne uma string, mesmo que não haja correspondência
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao ler o arquivo: ${filePath}. Detalhes: ${error.message}`);
        } else {
            throw new Error(`Erro desconhecido ao ler o arquivo: ${filePath}`);
        }
    }
};

async function processCsv(filePath: string): Promise<Objeto> {
    return new Promise((resolve, reject) => {
        const inputStream = createReadStream(filePath, { encoding: 'latin1' });
        let linha5: { inscricao: string; cnpj: string; nome: string } = { inscricao: '', cnpj: '', nome: '' };
        let dados: Nota[] = [];
        let linhaAtual = 0;

        inputStream
            .pipe(new CsvReadableStream({ parseNumbers: false, parseBooleans: false, trim: true, delimiter: ';' }))
            .on('data', (row: any[]) => {
                linhaAtual++;
                if (linhaAtual === 4) {
                    linha5.nome = row[1]?.replace("NOME/RAZAO SOCIAL: ", '');

                }
                if (linhaAtual === 5) {
                    const match = row[1]?.match(/INSCRIÇÃO ESTADUAL:\s*([\d\-]+)\s*CNPJ:\s*([\d./-]+)/);
                    if (match) {
                        linha5.inscricao = match[1].replace(/\D/g, '');
                        linha5.cnpj = match[2].replace(/[^\d]/g, '');
                    }
                }

                if (linhaAtual >= 8) {
                    dados.push({
                        dataEmissao: converterParaISO(row[0]),
                        serie: row[1],
                        numero: row[2],
                        chave: row[3].replace(/[^\d]/g, ''),
                        protocolo: row[6],
                        dataAutorizacao: converterParaISO(row[7]),
                        situacao: row[8],
                        valor: parseFloat(row[14].replace(/\./g, '').replace(',', '.')),
                        xml: false,
                    });
                }
            })
            .on('end', () => {
                resolve({ ...linha5, notas: dados });
            })
            .on('error', (err: Error) => {
                console.error('Erro ao processar o CSV:', err);
                reject(err);
            });
    });
}

function converterParaISO(dataHora: string): Date {
    const [data, hora] = dataHora.split(' ');
    const [dia, mes, ano] = data.split('/');
    return new Date(`${ano}-${mes}-${dia}T${hora}Z`);
}

const salvarArquivo = async (file: any): Promise<string> => {
    try {
        const { createReadStream: Stream0, filename: Filename0 } = await file;
        const timestamp: number = new Date().getTime();
        const folderPath = `./uploads/temp/${timestamp}`;
        await fs.mkdir(folderPath, { recursive: true });

        const filePath = `${folderPath}/${Filename0}`;
        const stream = Stream0();

        await pipe(stream, createWriteStream(filePath));

        return filePath;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao salvar o arquivo.');
    }
};

const extrairArquivos = async (filePaths: string[]): Promise<string[]> => {
    const arquivosExtraidos: string[] = [];

    for (const filePath of filePaths) {
        const stats = statSync(filePath);

        if (stats.isFile() && path.extname(filePath) === '.zip') {
            const baseDir = path.dirname(filePath);
            const excelDir = path.join(baseDir, 'EXCEL');
            const xmlDir = path.join(baseDir, 'XML');

            const directory = await unzipper.Open.file(filePath);

            for (const file of directory.files) {
                const extractedFileName = path.basename(file.path);
                const ext = path.extname(extractedFileName).toLowerCase();

                if (ext === '.csv') {
                    await fs.mkdir(excelDir, { recursive: true });
                    const newExcelPath = path.join(excelDir, extractedFileName);
                    await pipe(file.stream(), createWriteStream(newExcelPath));
                    arquivosExtraidos.push(newExcelPath);
                } else if (ext === '.xml') {
                    await fs.mkdir(xmlDir, { recursive: true });
                    const newXmlPath = path.join(xmlDir, extractedFileName);
                    await pipe(file.stream(), createWriteStream(newXmlPath));
                    arquivosExtraidos.push(newXmlPath);
                }
            }
        } else if (stats.isFile() && (path.extname(filePath) === '.csv' || path.extname(filePath) === '.xml')) {
            arquivosExtraidos.push(filePath);
        }
    }

    return arquivosExtraidos;
};
