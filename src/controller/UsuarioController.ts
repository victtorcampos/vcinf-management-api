import { hash } from 'bcryptjs';
import { Prisma, PrismaClient, type $Enums, type Usuario as PrismaUsuario } from "../config/prisma-client";
import { AuthenticationError, ValidationError } from 'apollo-server';
import { generateToken, getUserAuth, isAdminAuth } from '../services/authService';
import { compare } from "bcryptjs";
import { handleError, handleSuccess, type ApiResponse } from '../utils/responseHandler';
const prisma = new PrismaClient().usuario;

export interface TypeUsuario extends PrismaUsuario { }

export const findAllUsuarios = async (): Promise<ApiResponse<PrismaUsuario[]>> => { try { const usuarios = await prisma.findMany(); return handleSuccess(usuarios); } catch (error) { return handleError('Erro ao buscar todos os usuários.'); } };

export const findUsuarioById = async (id: string): Promise<ApiResponse<PrismaUsuario | null>> => { try { const usuario = await prisma.findUnique({ where: { id } }); return handleSuccess(usuario); } catch (error) { return handleError(`Erro ao buscar usuário com ID ${id}.`); } };

export const findUsuarioByEmail = async (email: string): Promise<ApiResponse<PrismaUsuario | null>> => { try { const usuario = await prisma.findUnique({ where: { email } }); return handleSuccess(usuario); } catch (error) { return handleError(`Erro ao buscar usuário com email ${email}.`); } };

export const createUsuario = async (data: TypeUsuario, context: any): Promise<ApiResponse<PrismaUsuario>> => {
    try {
        const usuario = getUserAuth(context.req);
        isAdminAuth(usuario);
        const hashedPassword = await hash(data.password, 10);
        const newUsuario = await prisma.create({ data: { email: data.email, password: hashedPassword, role: data.role }, });
        return handleSuccess(newUsuario);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return handleError('Usuário já existe.', error.code);
        };
        if (error instanceof AuthenticationError) {
            return handleError('Não tem permissão.', error.code);
        };
        return handleError('Erro ao criar usuário.');
    }
};

export const updateUsuario = async (data: { id: string; email: string; password?: string; role: $Enums.Role }, context: any): Promise<ApiResponse<PrismaUsuario>> => {
    try {
        if (!data.id) {
            throw new ValidationError('ID não fornecido.');
        }
        const usuario = getUserAuth(context.req);
        isAdminAuth(usuario);
        const hashedPassword = data.password ? await hash(data.password, 10) : undefined;
        const updatedUsuario = await prisma.update({ where: { id: data.id }, data: { email: data.email, password: hashedPassword, role: data.role, }, });
        return handleSuccess(updatedUsuario);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return handleError('Usuário não encontrado.', error.code);
        }
        return handleError('Erro ao atualizar usuário.');
    }
};

export const deleteUsuario = async (id: string, context: any): Promise<ApiResponse<null>> => {
    try {
        if (!id) { throw new ValidationError('ID não fornecido.'); }
        const usuario = getUserAuth(context.req);
        isAdminAuth(usuario);
        await prisma.delete({ where: { id } });
        return handleSuccess(null);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return handleError('Usuário não encontrado.', error.code);
        }
        return handleError('Erro ao deletar usuário.');
    }
};

export const authenticateUsuario = async (email: string, password: string): Promise<ApiResponse<string>> => {
    try {
        const usuario = await prisma.findUnique({ where: { email } });
        if (!usuario) {
            throw new AuthenticationError('Credenciais inválidas.');
        }
        const valid = await compare(password, usuario.password);


        if (!valid) {
            throw new AuthenticationError('Credenciais inválidas.');
        }
        const token = await generateToken(usuario);
        return handleSuccess(token);
    } catch (error) {
        if (error instanceof AuthenticationError) {
            return handleError(error.message);
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return handleError(error.message, error.code);
        }
        return handleError('Erro ao autenticar usuário.');
    }
};


