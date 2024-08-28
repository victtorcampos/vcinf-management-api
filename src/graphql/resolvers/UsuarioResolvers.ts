import { $Enums } from "../../config/prisma-client";
import { authenticateUsuario, createUsuario, deleteUsuario, findAllUsuarios, findUsuarioById, updateUsuario, type TypeUsuario } from "../../controller";
import type { ApiResponse } from "../../utils";

export const UsuarioResolvers = {
    Query: {
        Usuarios: async (): Promise<ApiResponse<TypeUsuario[]>> => { return await findAllUsuarios(); },
        Usuario: async (_: any, { id }: { id: string }): Promise<ApiResponse<TypeUsuario | null>> => { return await findUsuarioById(id); },
    },
    Mutation: {
        createUsuario: async (_: any, args: { data: TypeUsuario }, context: any): Promise<ApiResponse<TypeUsuario>> => { return await createUsuario(args.data, context); },
        updateUsuario: async (_: any, { id, email, password, role }: TypeUsuario, context: any): Promise<ApiResponse<TypeUsuario>> => { return await updateUsuario({ id, email, password, role }, context); },
        deleteUsuario: async (_: any, { id }: { id: string }, context: any): Promise<ApiResponse<null>> => { return await deleteUsuario(id, context); },
        authenticateUsuario: async (_: any, args: { email: string; password: string }): Promise<ApiResponse<string>> => { return await authenticateUsuario(args.email, args.password); },
    }
}