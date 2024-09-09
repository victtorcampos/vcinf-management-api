import { ApolloError, ValidationError } from "apollo-server";
import { getAuth } from "../../../services/authService";
import { $Enums, PrismaClient, type EventoReinf } from "../../../config/prisma-client";
import { consultaReciboReinf, createLote, enviarReinf, signFile } from "../../../services/webservice/EFD-Reinf";
import { AxiosError } from "axios";

const prisma = new PrismaClient({});

export const relatorioReinf = async (data: any, context: any) => {

    const [mes, ano] = data.periodo.split('/');
    const periodo = new Date(`${ano}-${mes}-01T00:00:00Z`);


    const findEventoReinf = await prisma.eventoReinf.findMany({ where: { periodo: periodo }, include: { Emitente: true }, orderBy: { Emitente: { cod_dominio: 'asc' } } });
    return findEventoReinf;
}

export const createFile = async (data: any, context: any): Promise<EventoReinf> => {
    try {
        const { periodo, cnpj } = data;

        const { userId, contadorId, role } = getAuth(context.req);
        const emitenteFind = await prisma.emitente.findUnique({ where: { cnpj }, include: { contadores: true, eventoReinf: true } });

        if (!emitenteFind) { throw new ApolloError('Emitente não encontrado para o CNPJ fornecido.', 'NOT_FOUND'); }

        const periodoEspecifico = new Date(periodo);


        const existevento = emitenteFind.eventoReinf.some(evento =>
            evento.periodo.getTime() === periodoEspecifico.getTime()
        );

        if (existevento) {
            return {
                id: "",
                evento: "",
                periodo: new Date(),
                recibo: "",
                erro: "já existe o evento",
                dateEnvio: new Date(),
                protocoloEnvioLote: "",
                xml: "",
                status: $Enums.StatusEventoReinf.ERROR,
                paiId: "",
                createdAt: new Date(),
                emitenteId: "",
            }
        }


        if (!emitenteFind?.contadores.some((contador) => contador.contadorId === contadorId)) { throw new ApolloError('Contador não responsavel para o Emitente', 'NOT_FOUND'); }
        let contadorFind = await prisma.contador.findUnique({ where: { id: contadorId }, include: { certificados: true } });

        let emitente; let contador; let certificado;
        if (!contadorFind) { throw new ApolloError('Contador não encontrado.', 'NOT_FOUND'); }

        if (!contadorFind?.certificados) { throw new ApolloError('Certificado não encontrador.', 'NOT_FOUND'); };

        emitente = {
            id: emitenteFind.id || "",
            cod_dominio: emitenteFind.cod_dominio || "",
            nome: emitenteFind.nome || "",
            razao_social: emitenteFind.razao_social || "",
            codDoc: emitenteFind.cnpj || emitenteFind.cpf || "",
            ie: emitenteFind.ie || "",
            contador: {
                id: contadorFind.id,
                nome: contadorFind.nome || "",
                cpf: contadorFind.cpf || "",
                regcrc: contadorFind.regcrc || "",
                telefone: contadorFind.telefone || "",
                email: contadorFind.email || "",
            },
            certificado: {
                id: contadorFind.certificados[0].id || "",
                requerente: contadorFind.certificados[0].requerente || "",
                validade: contadorFind.certificados[0].validade,
                fileBase64: contadorFind.certificados[0].fileBase64 || "",
                password: contadorFind.certificados[0].password,
            },

        };



        const xmlLote = await createLote({ periodo: periodo, emitente });

        const xmlLoteBase64 = Buffer.from(xmlLote).toString('base64');

        const evento = await prisma.eventoReinf.create({ data: { evento: 'R2099', periodo: periodo, xml: xmlLoteBase64, emitenteId: emitente.id } });

        return evento;
    } catch (error) {
        console.log(error);

        return {
            id: "",
            evento: "",
            periodo: new Date(),
            recibo: "",
            erro: "",
            dateEnvio: new Date(),
            protocoloEnvioLote: "",
            xml: "",
            status: $Enums.StatusEventoReinf.ERROR,
            paiId: "",
            createdAt: new Date(),
            emitenteId: "",
        }

    }
}

export const signReinfLote = async (data: any, context: any): Promise<EventoReinf> => {
    try {

        const { userId, contadorId, role } = getAuth(context.req);


        let contadorFind = await prisma.contador.findUnique({ where: { id: contadorId }, include: { certificados: true } });

        if (!contadorFind) { throw new ApolloError('Contador não encontrado.', 'NOT_FOUND'); }
        if (!contadorFind?.certificados) { throw new ApolloError('Certificado não encontrador.', 'NOT_FOUND'); };

        let evento = await prisma.eventoReinf.findUnique({ where: { id: data.id } });


        if (!evento) { throw new ValidationError('ID não fornecido.'); }
        if (evento.status !== "CRIADO") { throw new ValidationError('ID não fornecido.'); }

        const arquivoassinado = await signFile(evento.xml, contadorFind.certificados[0]);

        const xmlLoteBase64 = Buffer.from(arquivoassinado).toString('base64');

        const eventoUpdate = await prisma.eventoReinf.update({ where: { id: data.id }, data: { xml: xmlLoteBase64, status: "ASSINADO" } })

        return eventoUpdate;
    } catch (error) {
        console.log(error);

        return {
            id: "",
            evento: "",
            periodo: new Date(),
            recibo: "",
            dateEnvio: new Date(),
            protocoloEnvioLote: "",
            erro: "",
            xml: "",
            status: $Enums.StatusEventoReinf.ERROR,
            paiId: "",
            createdAt: new Date(),
            emitenteId: "",
        }

    }
}

export const consultaRecibo = async (data: any, context: any): Promise<EventoReinf> => {
    try {
        const { userId, contadorId, role } = getAuth(context.req);
        let evento = await prisma.eventoReinf.findUnique({ where: { id: data.id }, include: { Emitente: true } })
        let contadorFind = await prisma.contador.findUnique({ where: { id: contadorId }, include: { certificados: true } });

        if (!contadorFind) { throw new ApolloError('Contador não encontrado.', 'NOT_FOUND'); }
        if (!contadorFind.certificados) { throw new ApolloError('Certificado não encontrador.', 'NOT_FOUND'); };

        if (!evento) { throw new ApolloError('Evento não encotrado.', 'NOT_FOUND'); }
        if (!evento.Emitente) { throw new ApolloError('Emitente não encotrado.', 'NOT_FOUND'); }

        let prot = null;
        let result = null;
        if (evento.erro) {
            const erroMatch = evento.erro.match(/Protocolo: (\d+\.\d+\.\d+)/);
            prot = erroMatch ? erroMatch[1].length === 18 ? erroMatch[1] : null : null;
        }

        if (!evento.protocoloEnvioLote) {
            if (!prot) {
                throw new ApolloError('Protocolo não encontrador.', 'NOT_FOUND');

            } else {
                evento.protocoloEnvioLote = prot;
            }
        }

        if (evento.status !== "ERROR") { throw new ApolloError('Evento não enviado.', 'NOT_FOUND'); }

        result = await consultaReciboReinf(evento.protocoloEnvioLote, contadorFind.certificados[0]);

        if (result.recibo) {
            return await prisma.eventoReinf.update({ where: { id: data.id }, data: { recibo: result.recibo, status: "CONFIRMADO" }, include: { Emitente: true } })
        }

        if (result.codResp === "MS1078") {
            return await prisma.eventoReinf.update({ where: { id: data.id }, data: { recibo: result.recibo, status: "OUTRO", erro: `MS1078: A EFD já foi fechada para o período informado, ou existe um evento de fechamento em processamento` }, include: { Emitente: true } })
        }

        if (result.codResp === "MS0015") {
            return await prisma.eventoReinf.update({ where: { id: data.id }, data: { recibo: result.recibo, status: "ERROR", erro: `MS0015: Operação não permitida. Para pessoa jurídica, deve ser utilizado certificado digital: da matriz do CNPJ declarante, ou cujo CPF pertença ao representante legal do CNPJ da matriz do declarante, ou que pertença a um procurador do CNPJ da matriz do declarante devidamente habilitado no sistema de Procuração Eletrônica da RFB.` }, include: { Emitente: true } })
        }

        if (result.codResp === "MS1009") {
            return await prisma.eventoReinf.update({ where: { id: data.id }, data: { recibo: result.recibo, status: "ERROR", erro: `MS1009: Não existem Informações do Contribuinte vigentes na data do evento. Verifique o evento R-1000 - Informações do contribuinte.` }, include: { Emitente: true } })
        }

        if (result.codResp === "MS1234") {
            return await prisma.eventoReinf.update({ where: { id: data.id }, data: { recibo: result.recibo, status: "OUTRO", erro: `MS1234: O CNPJ está baixado no período de apuração. O mês/ano de referência das informações é maior que o mês/ano da data da baixa registrada no sistema CNPJ.` }, include: { Emitente: true } })
        }

        return evento;

    } catch (error) {
        console.log(error);

        return {
            id: "",
            evento: "",
            periodo: new Date(),
            recibo: "",
            dateEnvio: new Date(),
            erro: "",
            protocoloEnvioLote: "",
            xml: "",
            status: $Enums.StatusEventoReinf.ERROR,
            paiId: "",
            createdAt: new Date(),
            emitenteId: "",
        }
    }
}

export const sendReinfLote = async (data: any, context: any): Promise<EventoReinf> => {
    try {

        const { userId, contadorId, role } = getAuth(context.req);

        let contadorFind = await prisma.contador.findUnique({ where: { id: contadorId }, include: { certificados: true } });

        if (!contadorFind) { throw new ApolloError('Contador não encontrado.', 'NOT_FOUND'); }
        if (!contadorFind?.certificados) { throw new ApolloError('Certificado não encontrador.', 'NOT_FOUND'); };

        let evento = await prisma.eventoReinf.findUnique({ where: { id: data.id } });
        if (!evento) { throw new ValidationError('ID não fornecido.'); }
        //if (evento.status !== "ASSINADO") { throw new ValidationError('ID não fornecido.'); }

        let eventoUpdate;
        const resultado = await enviarReinf(evento.xml, contadorFind.certificados[0]);

        if (!resultado.protocolo) {
            eventoUpdate = await prisma.eventoReinf.update({ where: { id: data.id }, data: { status: "ERROR", erro: `${resultado.error.codigo}: ${resultado.error.descricao}.`, protocoloEnvioLote: null } })
        } else {
            eventoUpdate = await prisma.eventoReinf.update({ where: { id: data.id }, data: { status: "ENVIADO", protocoloEnvioLote: resultado.protocolo, erro: null } });
        }


        return eventoUpdate;

    } catch (error) {

        return {
            id: "",
            evento: "",
            periodo: new Date(),
            recibo: "",
            dateEnvio: new Date(),
            erro: "",
            protocoloEnvioLote: "",
            xml: "",
            status: $Enums.StatusEventoReinf.ERROR,
            paiId: "",
            createdAt: new Date(),
            emitenteId: "",
        }

    }
}