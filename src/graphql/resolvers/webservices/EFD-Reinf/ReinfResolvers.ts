import { GraphQLScalarType, Kind } from "graphql";

import { $Enums, Certificado, Contador, PrismaClient, type EventoReinf } from "../../../../config/prisma-client";
import { ApolloError, AuthenticationError } from "apollo-server";
import { getAuth } from "../../../../services/authService";
import { createLote } from "../../../../services/webservice/EFD-Reinf";
import { createFile, sendReinfLote, signReinfLote } from "../../../../controller/webservices/EFD-Reinf/ReinfContoller";

const prisma = new PrismaClient({});

// Definição do Scalar Date
const DateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: any) {
        return value instanceof Date ? value.toISOString() : null; // Retorna a data como uma string ISO
    },
    parseValue(value: any) {
        return new Date(value); // Converte input string para Date
    },
    parseLiteral(ast) {
        return ast.kind === Kind.STRING ? new Date(ast.value) : null; // Converte string literal para Date
    },
});


export const ReinfResolvers = {
    Date: DateScalar,
    Query: {
        enviarReinfTotal: async (parent: any, args: any, context: any) => {
            const emitenteWithIdOnly = await prisma.emitente.findMany({ select: { id: true, eventoReinf: true, razao_social: true, cnpj: true }, take: 1 })
            emitenteWithIdOnly.forEach(async (emitente) => {

                //  const result = await createFile({ periodo: "2024-08-01T00:00:00Z", cnpj: emitente?.cnpj }, context);

                const dataEspecifica = new Date('2024-08-01T00:00:00Z');
                const registrosFiltrados = emitente.eventoReinf.filter(registro =>
                    registro.periodo.getTime() === dataEspecifica.getTime()
                );

                console.log(emitente.id, registrosFiltrados[0].id);

                //const result = await signReinfLote({ id: registrosFiltrados[0].id }, context);
                // const result = await sendReinfLote({ id: registrosFiltrados[0].id }, context);

                // console.log(result);

            });

            const result = await prisma.eventoReinf.findMany({ where: { status: "ERROR" }, include: { Emitente: true } })
            const retorno = result.map((evento) => {
                return { id: evento.id, erro: evento.erro, emitente: { cnpj: evento.Emitente?.cnpj, razao_social: evento.Emitente?.razao_social } }
            })

            console.log(retorno);


            return await prisma.eventoReinf.findMany({ where: { status: "ERROR" }, include: { Emitente: true } });

        }
    },
    Mutation: {
        createReinfR2099: async (_: any, args: { data: { periodo: Date, cnpj: string } }, context: any): Promise<EventoReinf> => {
            return await createFile(args.data, context);
        },
        sendReinfR2099: async (_: any, id: string, context: any) => await sendReinfLote(id, context),
        signReinfR2099: async (_: any, id: string, context: any) => await signReinfLote(id, context),
    },
}


