import { XMLBuilder } from 'fast-xml-parser';
import { SignedXml } from "xml-crypto";
import * as forge from 'node-forge';

interface TypeMovimentoReinf { periodo: Date; emitente: TypeEmitenteReinf; }
interface TypeEmitenteReinf { id: string; cod_dominio: string; nome: string; razao_social: string; codDoc: string; ie: string; contador: TypeContadorReinf; certificado: TypeCertificadoReinf; }
interface TypeContadorReinf extends Object { id: string; nome: string; cpf: string; regcrc: string; telefone: string; email: string; }
interface TypeCertificadoReinf extends Object { id: string; requerente: string; validade: Date | null; fileBase64: string; password: string; }
export const createLote = async (data: TypeMovimentoReinf): Promise<any> => {
    const { emitente, periodo } = data;
    const evtFechamento = createEvtFechamento(emitente, periodo);
    const xmlEvt = createXml(evtFechamento);
    const xmlEvtAssinado = await signedXmlEventReinf({ evento: `evtFechaEvPer`, xml: xmlEvt, certificado: emitente.certificado });
    const xmlevneto = await createLoteEnvioReinf(emitente, periodo, evtFechamento.Reinf);
    let xmlLote = createXml(xmlevneto);
    xmlLote = xmlLote.replace(/<insertXML><data>aqui<\/data><\/insertXML>/, xmlEvtAssinado);
    return xmlLote;
}

const createXml = (evt: any): string => {
    return new XMLBuilder({ ignoreAttributes: false }).build(evt);
}
const createLoteEnvioReinf = (emitente: TypeEmitenteReinf, periodo: Date, Reinf: object): object => {
    const { nrInsc, idEvento } = uniqueIDEvento(emitente.codDoc, periodo);
    return { Reinf: { "@_xmlns": `http://www.reinf.esocial.gov.br/schemas/envioLoteEventosAssincrono/v1_00_00`, envioLoteEventos: { ideContribuinte: { tpInsc: '1', nrInsc: nrInsc }, eventos: { evento: { "@_Id": idEvento, insertXML: { data: "aqui" } } } } } }
}

const createEvtFechamento = (emitente: TypeEmitenteReinf, periodo: Date) => {
    const { nrInsc, idEvento } = uniqueIDEvento(emitente.codDoc, periodo);
    const month = (periodo.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = periodo.getUTCFullYear();
    return { Reinf: { "@_xmlns": `http://www.reinf.esocial.gov.br/schemas/evtFechamento/v2_01_02`, evtFechaEvPer: { "@_id": idEvento, ideEvento: { perApur: `${year}-${month}`, tpAmb: "1", procEmi: "1", verProc: "2_01_02" }, ideContri: { tpInsc: "1", nrInsc: nrInsc }, ideRespInf: { nmResp: emitente.contador.nome, cpfResp: emitente.contador.cpf, telefone: "6635441504", email: emitente.contador.email }, infoFech: { evtServTm: "N", evtServPr: "N", evtAssDespRec: "N", evtAssDespRep: "N", evtComProd: "N", evtCPRB: "N", evtAquis: "N" } } } }
}

const uniqueIDEvento = (doc: string, periodo: Date): { idEvento: string, nrInsc: string } => {
    var T = doc.length === 14 ? '1' : '2';
    var NNNNNNNN = doc.replace(/^(\d{8}).*/, "$1");
    var NNNNNNNNNNNNNN = doc.replace(/^(\d{8}).*/, '$1' + '0'.repeat(6));

    var AAAAMMDDHHMMSS = periodo.toISOString().replace(/[-:T]/g, '').slice(0, 14);

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