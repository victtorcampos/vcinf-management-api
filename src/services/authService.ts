import { Request } from 'express';
import { AuthenticationError } from "apollo-server";


import { sign, verify } from "jsonwebtoken";
import { type Usuario as TypeUsuario } from '../config/prisma-client';

export const getUserAuth = (req: Request) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.replace('Bearer ', '');
        return verifyToken(token, process.env.JWT_SECRET!);
    } throw new AuthenticationError('Not authenticated');
};

export const getAuth = (req: Request) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw new AuthenticationError('Contador não selecionado');
    }
    const token = authorization.replace('Bearer ', '');
    return verify(token, process.env.JWT_SECRET!) as { userId: string; role: string; contadorId: string };
}

export const isAdminAuth = (user: any) => {
    if (user.role !== 'ADMIN') {
        throw new AuthenticationError('Not authorized as admin');
    }
};

export const generateToken = async (user: TypeUsuario): Promise<string> => await sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1d' });
export const verifyToken = (token: string, JWT_SECRET: string) => {
    const { userId, role } = verify(token, JWT_SECRET) as { userId: string; role: string };
    return { userId, role }
}