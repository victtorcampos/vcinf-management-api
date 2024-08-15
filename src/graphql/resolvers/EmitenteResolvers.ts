import { createEmitente } from "../../controller";
import { ApiResponse } from "../../utils";

interface CreateEmitenteData {

};

interface Emitente {

};

type Context = { req: Request; };

export const EmitenteResolvers = {
    Query: {

    },
    Mutation: {

        createEmitente: async (_: any, { data }: { data: CreateEmitenteData }, context: Context): Promise<ApiResponse<Emitente>> => await createEmitente(data, context),

    },
}