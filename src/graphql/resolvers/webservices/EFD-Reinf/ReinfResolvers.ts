import { GraphQLScalarType, Kind } from "graphql";

import { $Enums, Certificado, Contador, PrismaClient, type EventoReinf } from "../../../../config/prisma-client";
import { ApolloError, AuthenticationError } from "apollo-server";
import { getAuth } from "../../../../services/authService";
import { createLote } from "../../../../services/webservice/EFD-Reinf";
import { consultaRecibo, createFile, sendReinfLote, signReinfLote } from "../../../../controller/webservices/EFD-Reinf/ReinfContoller";

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

            const result1 = await prisma.eventoReinf.findMany({ include: { Emitente: true }, orderBy: { Emitente: { cod_dominio: 'asc' } } });


            const result = await prisma.eventoReinf.findMany({ where: { status: "ERROR" }, include: { Emitente: true } });
            const retorno = result.map((evento) => {
                return { id: evento.id, erro: evento.erro, emitente: { cnpj: evento.Emitente?.cnpj, razao_social: evento.Emitente?.razao_social } }
            })


            return result1;

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


