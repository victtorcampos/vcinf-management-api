import { $Enums } from "../../config/prisma-client";
import { authenticateUser, createUser, deleteUser, findAllUsers, findUserById, updateUser, type TypeUser } from "../../controller";
import type { ApiResponse } from "../../utils";

export const UserResolvers = {
    Query: {
        users: async (): Promise<ApiResponse<TypeUser[]>> => { return await findAllUsers(); },
        user: async (_: any, { id }: { id: string }): Promise<ApiResponse<TypeUser | null>> => { return await findUserById(id); },
    },
    Mutation: {
        createUser: async (_: any, args: { data: TypeUser }, context: any): Promise<ApiResponse<TypeUser>> => { return await createUser(args.data, context); },
        updateUser: async (_: any, { id, email, password, role }: TypeUser, context: any): Promise<ApiResponse<TypeUser>> => { return await updateUser({ id, email, password, role }, context); },
        deleteUser: async (_: any, { id }: { id: string }, context: any): Promise<ApiResponse<null>> => { return await deleteUser(id, context); },
        authenticateUser: async (_: any, args: { email: string; password: string }): Promise<ApiResponse<string>> => { return await authenticateUser(args.email, args.password); },
    }
}