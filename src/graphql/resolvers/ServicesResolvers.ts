import { GraphQLScalarType, Kind } from "graphql";
import { getAuth } from "../../services/authService";
import { Certificado, Contador, PrismaClient } from "../../config/prisma-client";
import { ApolloError, AuthenticationError } from "apollo-server";
import { createLote } from "../../services/webservice/EFD-Reinf";

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

export const ServicesResolvers = {
    Date: DateScalar,
    Query: {

    },
    Mutation: {
        sendReinfCompleta: async (_: any, args: { data: { periodo: Date, cnpj: string }, context: any }, context: any) => {
            try {
                const { periodo, cnpj } = args.data;
                const { userId, contadorId, role } = getAuth(context.req);
                const emitenteFind = await prisma.emitente.findUnique({ where: { cnpj }, include: { contadores: true } });
                if (!emitenteFind) { throw new ApolloError('Emitente não encontrado para o CNPJ fornecido.', 'NOT_FOUND'); }
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

                const evento = await prisma.eventoReinf.create({ data: { evento: 'R2099', periodo: periodo, xml: xmlLoteBase64 } });

                return evento;
            } catch (error) {
                return `error : ${error}`;
            }
        },
    },
}


