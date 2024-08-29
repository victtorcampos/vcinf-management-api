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

export const createEmitente = async (data: InputContador, context: any): Promise<ApiResponse<TypeEmitente>> => {
    try {
        const auth = getAuth(context.req);
        isAdminAuth(auth);
        const emitente = await prisma.create({
            data: {
                ...data
                , enderecos: {
                    create: data.enderecos
                },
                contadores: {
                    create: { contadorId: auth.contadorId }
                }
            }
        })
        return handleSuccess(emitente)
    } catch (error) {
        return handleError("Erro desconhecido.");
    }
};
export const findIdEmitente = async (id: string, context: any): Promise<ApiResponse<TypeEmitente | null>> => {
    try {
        const emitente = await prisma.findUnique({ where: { id: id } });
        
        console.log(handleSuccess(emitente));

        return handleSuccess(emitente)
    } catch (error) {
        return handleError("Erro desconhecido.");
    }
};

