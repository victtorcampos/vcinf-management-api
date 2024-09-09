import { AuthenticationError, ValidationError } from "apollo-server";
import { PrismaClient, type Endereco as TypeEndereco, type Emitente as TypeEmitente, type Contador as TypeContador, Prisma } from "../config/prisma-client";
import { getAuth, isAdminAuth } from "../services/authService";
import { ApiResponse, handleError, handleSuccess } from "../utils";
import { JsonWebTokenError } from "jsonwebtoken";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "../config/prisma-client/runtime/library";
import axios from "axios";

const prisma = new PrismaClient({
    //log: ['query', 'info', 'warn', 'error'],
}).emitente;

type Context = { req: Request; };
interface InputContador extends TypeEmitente {
    enderecos: [TypeEndereco]
}

interface EmitenteResponse extends TypeEmitente {

}


export const createEmitente = async (data: InputContador, context: any): Promise<ApiResponse<TypeEmitente>> => {
    try {

        const auth = getAuth(context.req);
        isAdminAuth(auth);
        const emitente = await prisma.create({
            data: {
                ...data
                , enderecos: {
                    create: data.enderecos
                },
                contadores: {
                    create: { contadorId: auth.contadorId }
                }
            },
            include: { enderecos: true, contadores: true }
        });

        return handleSuccess(emitente)
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return handleError(`Já existe o cadastro.`);
            }
        }
        console.log(error);
        return handleError("Erro desconhecido.");
    }
};

export const conslutaReceitaws = async (cnpj: string, context: any): Promise<ApiResponse<TypeEmitente>> => {
    try {

        const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
        const responseIBGE = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios`);

        const municipio = responseIBGE.data.filter((municipio: any) => municipio.nome.includes(response.data.municipio.charAt(0).toUpperCase() + response.data.municipio.slice(1).toLowerCase()));

        const emitente = {
            id: "",
            cod_dominio: "",
            nome: response.data.fantasia || response.data.nome,
            razao_social: response.data.nome,
            cnpj: cnpj,
            cpf: "",
            ie: "",
            enderecos: [{
                id: "",
                logradouro: response.data.logradouro,
                nro: response.data.numero,
                complemento: response.data.complemento,
                bairro: response.data.bairro,
                cep: response.data.cep.replace(/[.-]/g, ''),
                nome_cidade: municipio[0].nome,
                uf: response.data.uf,
                codigoIBGEcidade: municipio[0].id,
                nome_estado: municipio[0].microrregiao.mesorregiao.UF.nome,
                codigoIBGEestado: municipio[0].microrregiao.mesorregiao.UF.id

            }],
            createdAt: new Date(),
            updatedAt: new Date()
        }


        return handleSuccess(emitente)
    } catch (error) {


        return handleError("Erro. CNPJ não encotrado");
    }
}


export const findIdEmitente = async (id: string, context: any): Promise<ApiResponse<TypeEmitente>> => {
    try {
        const auth = getAuth(context.req);
        if (!auth.userId) { throw new AuthenticationError("Usuario não auntenticado.") }
        if (!auth.contadorId) { throw new AuthenticationError("Contador não selecionado.") }
        const emitente = await prisma.findUnique({ where: { id: id }, include: { enderecos: true, contadores: true } });
        if (!emitente) { throw new ValidationError('ID não fornecido.'); }
        return handleSuccess(emitente)
    } catch (error) {
        if (error instanceof AuthenticationError) { return handleError(error.message, error.code); };
        if (error instanceof JsonWebTokenError) { return handleError(`(Token)Não tem permissão. ${error.message}`); };
        return handleError("Erro desconhecido.");
    }
};

export const deleteIdEmitente = async (id: string, context: any): Promise<ApiResponse<String>> => {
    try {
        const auth = getAuth(context.req);
        if (!auth.userId) { throw new AuthenticationError("Usuario não auntenticado.") }
        if (!auth.contadorId) { throw new AuthenticationError("Contador não selecionado.") }
        await prisma.delete({ where: { id: id } });
        return handleSuccess("Emitente excluido.")
    } catch (error) {
        if (error instanceof AuthenticationError) { return handleError(error.message, error.code); };
        if (error instanceof JsonWebTokenError) { return handleError(`(Token)Não tem permissão. ${error.message}`); };
        if (error instanceof Prisma.PrismaClientRustPanicError) { return handleError(`PrismaClientRustPanicError.`); };
        if (error instanceof Prisma.PrismaClientValidationError) { return handleError(`PrismaClientValidationError.`); };
        if (error instanceof Prisma.PrismaClientKnownRequestError) { return handleError(`Erro ao encontra Emitente.`); };
        if (error instanceof Prisma.PrismaClientInitializationError) { return handleError(`PrismaClientInitializationError.`); };
        if (error instanceof Prisma.PrismaClientUnknownRequestError) { return handleError(`PrismaClientUnknownRequestError.`); };
        return handleError("Erro desconhecido.");
    }
};


