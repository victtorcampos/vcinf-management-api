import { PrismaClient, type Endereco as TypeEndereco, type Emitente as TypeEmitente } from "../config/prisma-client";
import { getAuth, isAdminAuth } from "../services/authService";
import { ApiResponse, handleError, handleSuccess } from "../utils";

const prisma = new PrismaClient({
    //log: ['query', 'info', 'warn', 'error'],
}).emitente;

type Context = { req: Request; };
interface InputContador extends TypeEmitente {
    enderecos: [TypeEndereco]
}

export const createEmitente = async (data: InputContador, context: any): Promise<ApiResponse<any>> => {
    try {
        const auth = getAuth(context.req);
        isAdminAuth(auth);
        const emitente = await prisma.create({
            data: {
                ...data
                , enderecos: {
                    create: data.enderecos
                },
                contadorId: auth.contadorId
            }
        })

        console.log(handleSuccess(emitente));

        return handleSuccess(emitente)
    } catch (error) {
        return handleError("Erro desconhecido.");
    }
};
