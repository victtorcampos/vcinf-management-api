import { hash } from 'bcryptjs';
import { Prisma, PrismaClient, type $Enums, type User as PrismaUser } from "../config/prisma-client";
import { AuthenticationError, ValidationError } from 'apollo-server';
import { generateToken, getUserAuth, isAdminAuth } from '../services/authService';
import { compare } from "bcryptjs";
import { handleError, handleSuccess, type ApiResponse } from '../utils/responseHandler';
const prisma = new PrismaClient().user;

export interface TypeUser extends PrismaUser { }

export const findAllUsers = async (): Promise<ApiResponse<PrismaUser[]>> => { try { const users = await prisma.findMany(); return handleSuccess(users); } catch (error) { return handleError('Erro ao buscar todos os usuários.'); } };

export const findUserById = async (id: string): Promise<ApiResponse<PrismaUser | null>> => { try { const user = await prisma.findUnique({ where: { id } }); return handleSuccess(user); } catch (error) { return handleError(`Erro ao buscar usuário com ID ${id}.`); } };

export const findUserByEmail = async (email: string): Promise<ApiResponse<PrismaUser | null>> => { try { const user = await prisma.findUnique({ where: { email } }); return handleSuccess(user); } catch (error) { return handleError(`Erro ao buscar usuário com email ${email}.`); } };

export const createUser = async (data: TypeUser, context: any): Promise<ApiResponse<PrismaUser>> => {
    try {
        const user = getUserAuth(context.req);
       // isAdminAuth(user);
        const hashedPassword = await hash(data.password, 10);
        const newUser = await prisma.create({ data: { email: data.email, password: hashedPassword, role: data.role }, });
        return handleSuccess(newUser);
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

export const updateUser = async (data: { id: string; email: string; password?: string; role: $Enums.Role }, context: any): Promise<ApiResponse<PrismaUser>> => {
    try {
        if (!data.id) {
            throw new ValidationError('ID não fornecido.');
        }
        const user = getUserAuth(context.req);
        isAdminAuth(user);
        const hashedPassword = data.password ? await hash(data.password, 10) : undefined;
        const updatedUser = await prisma.update({ where: { id: data.id }, data: { email: data.email, password: hashedPassword, role: data.role, }, });
        return handleSuccess(updatedUser);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return handleError('Usuário não encontrado.', error.code);
        }
        return handleError('Erro ao atualizar usuário.');
    }
};

export const deleteUser = async (id: string, context: any): Promise<ApiResponse<null>> => {
    try {
        if (!id) { throw new ValidationError('ID não fornecido.'); }
        const user = getUserAuth(context.req);
        isAdminAuth(user);
        await prisma.delete({ where: { id } });
        return handleSuccess(null);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return handleError('Usuário não encontrado.', error.code);
        }
        return handleError('Erro ao deletar usuário.');
    }
};

export const authenticateUser = async (email: string, password: string): Promise<ApiResponse<string>> => {
    try {
        const user = await prisma.findUnique({ where: { email } });
        if (!user) {
            throw new AuthenticationError('Credenciais inválidas.');
        }
        const valid = await compare(password, user.password);


        if (!valid) {
            throw new AuthenticationError('Credenciais inválidas.');
        }
        const token = await generateToken(user);
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


