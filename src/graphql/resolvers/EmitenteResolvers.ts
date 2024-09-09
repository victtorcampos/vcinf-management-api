import { type Endereco as TypeEndereco, type Emitente as TypeEmitente } from "../../config/prisma-client";
import { conslutaReceitaws, createEmitente, deleteIdEmitente, findIdEmitente } from "../../controller";
import { ApiResponse, handleSuccess } from "../../utils";

type Context = { req: Request; };

interface InputContador extends TypeEmitente {
    enderecos: [TypeEndereco]
}
export const EmitenteResolvers = {
    Query: {

    },
    Mutation: {
        createEmitente: async (_: any, args: { data: InputContador }, context: Context): Promise<ApiResponse<TypeEmitente>> => await createEmitente(args.data, context),
        findIdEmitente: async (_: any, args: { id: string }, context: Context): Promise<ApiResponse<TypeEmitente>> => await findIdEmitente(args.id, context),
        deleteIdEmitente: async (_: any, args: { id: string }, context: Context): Promise<ApiResponse<String>> => await deleteIdEmitente(args.id, context),
        conslutaReceitaws: async (_: any, args: { cnpj: string }, context: Context): Promise<ApiResponse<TypeEmitente>> => await conslutaReceitaws(args.cnpj, context),
    },
}