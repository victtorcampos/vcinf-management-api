import { type Endereco as TypeEndereco, type Emitente as TypeEmitente, PrismaClient } from "../../config/prisma-client";
import { createEmitente, deleteIdEmitente, findIdEmitente } from "../../controller";
import { ApiResponse, handleSuccess } from "../../utils";
import { getReceitaws } from "../../utils/getReceitaws";

type Context = { req: Request; };
const prisma = new PrismaClient({
    //log: ['query', 'info', 'warn', 'error'],
}).emitente;
interface InputContador extends TypeEmitente {
    enderecos: [TypeEndereco]
}
export const EmitenteResolvers = {
    Query: {
        emitentes: async (_: any): Promise<TypeEmitente[]> => {
            while (true) {
                //const emitentes = await prisma.findMany({ where: { nome: { equals: "" } }, take: 3 });
                const emitente = await prisma.findUnique({where: {cnpj : "13035187000100"}});
                const atualizado = await getReceitaws(emitente!.cnpj!);

                await new Promise((resolve) => {
                    console.log(`Pausa de 1 minuto...)`);
                    setTimeout(resolve, 65000);
                });

            }
            return [];
        },

    },
    Mutation: {
        createEmitente: async (_: any, args: { data: InputContador }, context: Context): Promise<ApiResponse<TypeEmitente>> => await createEmitente(args.data, context),
        findIdEmitente: async (_: any, args: { id: string }, context: Context): Promise<ApiResponse<TypeEmitente>> => await findIdEmitente(args.id, context),
        deleteIdEmitente: async (_: any, args: { id: string }, context: Context): Promise<ApiResponse<String>> => await deleteIdEmitente(args.id, context),
    },
}