import { Prisma, PrismaClient, type $Enums } from "../config/prisma-client";
import { getUserAuth, isAdminAuth } from "../services/authService";
import { handleError, handleSuccess, type ApiResponse } from "../utils/responseHandler";

const prisma = new PrismaClient().contador;

interface CreateContadorData { nome: string; cpf: string; regcrc: string; telefone: string; email: string; }
interface Contador { id: string; nome: string; cpf: string; usuarios: User[]; }
interface User { id: string; email: string; role: $Enums.Role; }

export const createContador = async (data: CreateContadorData, context: any): Promise<ApiResponse<Contador>> => {
    try {
        const user = getUserAuth(context.req);
        isAdminAuth(user);

        const { nome, cpf, regcrc, telefone, email } = data;
        const neWcontador = await prisma.create({
            data: {
                nome, cpf, regcrc, telefone, email, usuarios: { create: { userId: user.userId, }, },
            }, include: { usuarios: { include: { user: { select: { id: true, email: true, role: true, }, }, }, }, },
        });

        const usuarios = neWcontador.usuarios.map((usuario) => usuario.user);

        return handleSuccess({ id: neWcontador.id, nome: neWcontador.nome, cpf: neWcontador.cpf, usuarios, });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return handleError('Contador Já existe.', error.code);
            }
        }
        return handleError('Erro desconhecido.');
    }
};

export const updateContador = async (id: string, data: { nome: string; cpf: string }, context: any): Promise<ApiResponse<Contador>> => {
    try {
        const user = getUserAuth(context.req);
        isAdminAuth(user);

        const upContador = await prisma.update({ where: { id }, data, include: { usuarios: { include: { user: { select: { id: true, email: true, role: true, }, }, }, }, }, });

        const usuarios = upContador.usuarios.map((usuario) => usuario.user);

        return handleSuccess({ id: upContador.id, nome: upContador.nome, cpf: upContador.cpf, usuarios, });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return handleError(`Erro ao atualizar contador.`, error.code);
        }
        return handleError('Erro não definido.');
    }
};

export const deleteContador = async (id: string, context: any): Promise<ApiResponse<{ message: string }>> => {
    try {
        const user = getUserAuth(context.req);
        isAdminAuth(user);
        const deleteContador = await prisma.delete({ where: { id } });

        if (!deleteContador) {
            return handleError('Não foi possível excluir o contador.');
        }

        return handleSuccess({ message: 'Contador excluído com sucesso.' });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return handleError('Contador não excluído. Contador informado não existe no cadastro.', error.code);
        }
        return handleError('Erro não catalogado.');
    }
};
