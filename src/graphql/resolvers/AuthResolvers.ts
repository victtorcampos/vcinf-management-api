import { AuthApiResponse, authContador, authUsuario } from "../../controller";


export const AuthResolvers = {
    Query: {},
    Mutation: {
        authUsuario: async (_: any, args: { email: string, password: string }): Promise<AuthApiResponse<string>> => await authUsuario(args.email, args.password),
        authContador: async (_: any, args: { id: string }, context: any) => await authContador(args.id, context),
    }
}