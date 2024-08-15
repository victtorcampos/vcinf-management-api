import { createEmitente, EmitenteData } from "../../controller";
import { ApiResponse } from "../../utils";

type Context = { req: Request; };

export const EmitenteResolvers = {
    Query: {

    },
    Mutation: {

        emitente: async (_: any, { data }: { data: EmitenteData }, context: Context): Promise<ApiResponse<EmitenteData>> => await createEmitente(data, context),

    },
}