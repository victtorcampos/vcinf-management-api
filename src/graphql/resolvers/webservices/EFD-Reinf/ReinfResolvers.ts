import { GraphQLScalarType, Kind } from "graphql";

import { $Enums, Certificado, Contador, PrismaClient, type EventoReinf } from "../../../../config/prisma-client";
import { ApolloError, AuthenticationError } from "apollo-server";
import { getAuth } from "../../../../services/authService";
import { createLote } from "../../../../services/webservice/EFD-Reinf";
import { consultaRecibo, createFile, relatorioReinf, sendReinfLote, signReinfLote } from "../../../../controller/webservices/EFD-Reinf/ReinfContoller";

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
            const findEventoReinf = await prisma.eventoReinf.findMany({ include: { Emitente: true }, orderBy: { Emitente: { cod_dominio: 'asc' } } });
            return findEventoReinf;

        }
    },
    Mutation: {
        createReinfR2099: async (_: any, args: { data: { periodo: Date, cnpj: string } }, context: any): Promise<EventoReinf> => {
            return await createFile(args.data, context);
        },
        sendReinfR2099: async (_: any, id: string, context: any) => await sendReinfLote(id, context),
        signReinfR2099: async (_: any, id: string, context: any) => await signReinfLote(id, context),
        relatorioReinf: async (_: any, periodo: string, context: any) => await relatorioReinf(periodo, context),
    },
}


