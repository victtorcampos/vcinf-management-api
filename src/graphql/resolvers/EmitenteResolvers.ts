import { type Endereco as TypeEndereco, type Emitente as TypeEmitente } from "../../config/prisma-client";
import { createEmitente } from "../../controller";
import { ApiResponse, handleSuccess } from "../../utils";

type Context = { req: Request; };

interface InputContador extends TypeEmitente {
    enderecos: [TypeEndereco]
}
export const EmitenteResolvers = {
    Query: {

    },
    Mutation: {
        createEmitente: async (_: any, args: { data: InputContador }, context: Context): Promise<ApiResponse<any>> => await createEmitente(args.data, context),
    },
}