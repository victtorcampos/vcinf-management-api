import { Request } from 'express';
import { AuthenticationError } from "apollo-server";
import type { TypeUser } from "../controller/UserController";
import { sign, verify } from "jsonwebtoken";

export const getUserAuth = (req: Request) => {
    const authorization = req.headers.authorization; if (authorization) {
        const token = authorization.replace('Bearer ', '');
        return verifyToken(token, process.env.JWT_SECRET!);
    } throw new AuthenticationError('Not authenticated');
};
export const isAdminAuth = (user: any) => {
    if (user.role !== 'ADMIN') {
        throw new AuthenticationError('Not authorized as admin');
    }
};
export const generateToken = async (user: TypeUser): Promise<string> => await sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1d' });
export const verifyToken = (token: string, JWT_SECRET: string) => {
    const { userId, role } = verify(token, JWT_SECRET) as { userId: string; role: string };
    return { userId, role }
}