import { AuthenticationError } from "apollo-server";
import { compare } from "bcryptjs";
import { PrismaClient, type Usuario as typeUsuario } from "../config/prisma-client";

import { sign } from "jsonwebtoken";
import { getUserAuth } from "../services/authService";

const prisma = new PrismaClient().usuario;

export const authUsuario = async (email: string, password: string): Promise<AuthApiResponse<string>> => {
    try {
        const usuario = await prisma.findUnique({ where: { email } });
        if (!usuario) { throw new AuthenticationError('Credenciais inválidas.'); }
        const valid = await compare(password, usuario.password);
        if (!valid) { throw new AuthenticationError('Credenciais inválidas.'); }
        const token = await sign({ userId: usuario.id, role: usuario.role }, process.env.JWT_SECRET!, { expiresIn: '1d' });
        return handleSuccess(token);
    } catch (error) {
        if (error instanceof AuthenticationError) {
            return handleError(error.message, "00000");
        }
        return handleError('Erro ao autenticar usuário.', "00000");
    }
}

export const authContador = async (id: string, context: any): Promise<AuthApiResponse<string>> => {
    try {
        const usuario = getUserAuth(context.req);

        console.log(usuario);

        return handleSuccess("token");
    } catch (error) {
        if (error instanceof AuthenticationError) {
            return handleError(error.message, "00000");
        }
        return handleError('Erro ao autenticar usuário.', "00000");
    }
}

interface SuccessResponse<T> { success: true; token: T; }

interface ErrorResponse { success: false; error: { message: string; code?: string; }; }

export type AuthApiResponse<T> = SuccessResponse<T> | ErrorResponse;

const handleSuccess = <T>(token: T): SuccessResponse<T> => ({ success: true, token, });

const handleError = (message: string, code?: string): ErrorResponse => ({ success: false, error: { message, code }, });
