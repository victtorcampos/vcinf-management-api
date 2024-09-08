
import { XMLBuilder } from 'fast-xml-parser';
import { SignedXml } from "xml-crypto";
import * as forge from 'node-forge';
import axios, { AxiosError } from 'axios';
import * as https from 'https';

interface TypeMovimentoReinf { periodo: Date; emitente: TypeEmitenteReinf; }
interface TypeEmitenteReinf { id: string; cod_dominio: string; nome: string; razao_social: string; codDoc: string; ie: string; contador: TypeContadorReinf; certificado: TypeCertificadoReinf; }
interface TypeContadorReinf extends Object { id: string; nome: string; cpf: string; regcrc: string; telefone: string; email: string; }
interface TypeCertificadoReinf extends Object { id: string; requerente: string; validade: Date | null; fileBase64: string; password: string; }
export const createLote = async (data: TypeMovimentoReinf): Promise<any> => {
    const { emitente, periodo } = data;
    const evtFechamento = await createEvtFechamento(emitente, periodo);
    return evtFechamento;
}

export const enviarReinf = async (xml: string, certificado: TypeCertificadoReinf): Promise<any> => {
    try {
        let decodedString = Buffer.from(xml, 'base64').toString('utf8');
        let decodedCertificado = Buffer.from(certificado.fileBase64, 'base64');
        let xmlLote = gerarLote(decodedString);

        const respEnviaLote = await axios.post(`https://reinf.receita.economia.gov.br/recepcao/lotes`, xmlLote, { httpsAgent: new https.Agent({ pfx: decodedCertificado, passphrase: certificado.password, rejectUnauthorized: false, noDelay: false }), headers: { 'Content-Type': 'application/xml' } });

        const protocoloEnvio = respEnviaLote.data.match(/<protocoloEnvio>([^<]+)<\/protocoloEnvio>/)[1];

        return { protocolo: protocoloEnvio, error: { codigo: null, descricao: null } };
    } catch (error) {
        if (error instanceof AxiosError) {

            if (error.response?.status === 422) {

                const dataResponse = error.response?.data;

                // Extrair 'codigo'
                let codigoMatch = dataResponse.match(/<codigo>(.*?)<\/codigo>/);
                let codigo = codigoMatch ? codigoMatch[1] : "Código não encontrado";

                // Extrair 'descricao'
                let descricaoMatch = dataResponse.match(/<descricao>(.*?)<\/descricao>/);
                let descricao = descricaoMatch ? descricaoMatch[1] : "Descrição não encontrada";
                console.log({ protocolo: null, error: { codigo: codigo, descricao: descricao } });

                return { protocolo: null, error: { codigo: codigo, descricao: descricao } };
            }

        };
    }
}

const gerarLote = (xml: string) => {
    let nrInsc = xml.match(/<nrInsc>(.*?)<\/nrInsc>/);
    let idEvento = xml.match(/<evtFechaEvPer id="(.*?)">/);
    if (!nrInsc) { throw new Error('não encontrado'); }
    if (!idEvento) { throw new Error('não encontrado'); }
    const cabecalho = { Reinf: { "@_xmlns": `http://www.reinf.esocial.gov.br/schemas/envioLoteEventosAssincrono/v1_00_00`, envioLoteEventos: { ideContribuinte: { tpInsc: '1', nrInsc: nrInsc[1] }, eventos: { evento: { "@_Id": idEvento[1], insertXML: { data: "aqui" } } } } } }
    const geraXml = new XMLBuilder({ ignoreAttributes: false }).build(cabecalho);

    return geraXml.replace(/<insertXML><data>aqui<\/data><\/insertXML>/, xml);

}


const createXml = (evt: any): Promise<string> => {
    const geraXml = new XMLBuilder({ ignoreAttributes: false }).build(evt);
    return ajustanrInsc(geraXml);
}


export const signFile = async (file: string, certificado: TypeCertificadoReinf) => {
    let decodedString = Buffer.from(file, 'base64').toString('utf8');
    const xmlEvtAssinado = await signedXmlEventReinf({ evento: `evtFechaEvPer`, xml: decodedString, certificado: certificado });
    return xmlEvtAssinado;

}

const ajustanrInsc = async (xml: string): Promise<string> => {
    let output: string = xml;
    output = output.replace(/(<nrInsc>)(\d{7})(<\/nrInsc>)/, (match, p1, p2, p3) => {
        // p1 é a primeira parte da correspondência (<nrInsc>)
        // p2 é o número encontrado (5918316)
        // p3 é a terceira parte da correspondência (</nrInsc>)
        return `${p1}0${p2}${p3}`;
    });
    output = output.replace(/(<nrInsc>)(\d{7})(<\/nrInsc>)/, (match, p1, p2, p3) => {
        // p1 é a primeira parte da correspondência (<nrInsc>)
        // p2 é o número encontrado (5918316)
        // p3 é a terceira parte da correspondência (</nrInsc>)
        return `${p1}0${p2}${p3}`;
    });
    output = output.replace(/(<nrInsc>)(\d{6})(<\/nrInsc>)/, (match, p1, p2, p3) => {
        // p1 é a primeira parte da correspondência (<nrInsc>)
        // p2 é o número encontrado (5918316)
        // p3 é a terceira parte da correspondência (</nrInsc>)
        return `${p1}00${p2}${p3}`;
    });
    output = output.replace(/(<nrInsc>)(\d{6})(<\/nrInsc>)/, (match, p1, p2, p3) => {
        // p1 é a primeira parte da correspondência (<nrInsc>)
        // p2 é o número encontrado (5918316)
        // p3 é a terceira parte da correspondência (</nrInsc>)
        return `${p1}00${p2}${p3}`;
    });
    return xml;
}

const createLoteEnvioReinf = (emitente: TypeEmitenteReinf, periodo: Date, Reinf: object): object => {
    const { nrInsc, idEvento } = uniqueIDEvento(emitente.codDoc, periodo);
    return { Reinf: { "@_xmlns": `http://www.reinf.esocial.gov.br/schemas/envioLoteEventosAssincrono/v1_00_00`, envioLoteEventos: { ideContribuinte: { tpInsc: '1', nrInsc: nrInsc }, eventos: { evento: { "@_Id": idEvento, insertXML: { data: "aqui" } } } } } }
}

const createEvtFechamento = async (emitente: TypeEmitenteReinf, periodo: Date): Promise<any> => {

    if (!(periodo instanceof Date)) {
        periodo = new Date(periodo);
    }

    if (isNaN(periodo.getTime())) {
        throw new Error("Data inválida fornecida para 'periodo'");
    }

    const { nrInsc, idEvento } = uniqueIDEvento(emitente.codDoc, periodo);
    const month = (periodo.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = periodo.getUTCFullYear();
    const xml = await createXml({ Reinf: { "@_xmlns": `http://www.reinf.esocial.gov.br/schemas/evtFechamento/v2_01_02`, evtFechaEvPer: { "@_id": idEvento, ideEvento: { perApur: `${year}-${month}`, tpAmb: "1", procEmi: "1", verProc: "2_01_02" }, ideContri: { tpInsc: "1", nrInsc: nrInsc }, ideRespInf: { nmResp: emitente.contador.nome, cpfResp: emitente.contador.cpf, telefone: "6635441504", email: emitente.contador.email }, infoFech: { evtServTm: "N", evtServPr: "N", evtAssDespRec: "N", evtAssDespRep: "N", evtComProd: "N", evtCPRB: "N", evtAquis: "N" } } } });


    return xml;
}

const uniqueIDEvento = (doc: string, periodo: Date): { idEvento: string, nrInsc: string } => {
    var dataenvio = new Date();
    var T = doc.length === 14 ? '1' : '2';
    var NNNNNNNN = doc.replace(/^(\d{8}).*/, "$1");
    var NNNNNNNNNNNNNN = doc.replace(/^(\d{8}).*/, '$1' + '0'.repeat(6));

    var AAAAMMDDHHMMSS = dataenvio.toISOString().replace(/[-:T]/g, '').slice(0, 14);

    return {
        idEvento: `ID${T}${NNNNNNNNNNNNNN}${AAAAMMDDHHMMSS}00000`,
        nrInsc: NNNNNNNN
    };
}

const signedXmlEventReinf = async (args: { evento: string, xml: string, certificado: TypeCertificadoReinf }): Promise<string> => {
    const { certKeyPem, certBase64 } = await loadCertificateBase64File(args.certificado);
    var signedXml = new SignedXml({ privateKey: certKeyPem, getKeyInfoContent: () => { return `<X509Data><X509Certificate>${certBase64}</X509Certificate></X509Data>`; } });
    signedXml.addReference({ xpath: `//*[local-name(.)='${args.evento}']`, digestAlgorithm: "http://www.w3.org/2001/04/xmlenc#sha256", transforms: ["http://www.w3.org/2000/09/xmldsig#enveloped-signature", 'http://www.w3.org/TR/2001/REC-xml-c14n-20010315'], });
    signedXml.canonicalizationAlgorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
    signedXml.signatureAlgorithm = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256";
    signedXml.computeSignature(args.xml);
    return signedXml.getSignedXml();

}

const loadCertificateBase64File = async (certificado: TypeCertificadoReinf): Promise<{ certPem: any, certKeyPem: any, certBase64: any, certPassword: any }> => {

    const bufferCertificado = Buffer.from(certificado.fileBase64!, 'base64');
    const pfxAsn1 = forge.asn1.fromDer(bufferCertificado.toString('binary'), false);
    const pfxPkcs12 = forge.pkcs12.pkcs12FromAsn1(pfxAsn1, certificado.password);
    const certBags = pfxPkcs12.getBags({ bagType: forge.pki.oids.certBag });
    const keyBags = pfxPkcs12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });
    const certificate = certBags[forge.pki.oids.certBag]![0].cert;
    const privateKey = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag]![0].key;

    return {
        certPem: forge.pki.certificateToPem(certificate!),
        certKeyPem: forge.pki.privateKeyToPem(privateKey!),
        certBase64: forge.util.encode64(forge.asn1.toDer(forge.pki.certificateToAsn1(certificate!)).getBytes()),
        certPassword: certificado.password
    };
}