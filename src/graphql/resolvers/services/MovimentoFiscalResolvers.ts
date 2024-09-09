import { PrismaClient } from "../../../config/prisma-client";

export const MovimentoFiscalResolvers = {
    Query: {},
    Mutation: {
        getExcelSefaz: async (_: any, args: { data: any }, context: { prisma: PrismaClient, req: any }) => {
            try {
                const { prisma, req } = context;
                const { periodo, tipoDoc, fileExcelZip, fileXmlZip } = args.data;
                console.log({ periodo, tipoDoc, fileExcelZip, fileXmlZip });


                return "OK"
            } catch (error) {
                console.log(error);

                return "Erro"
            }
        }
    },
}