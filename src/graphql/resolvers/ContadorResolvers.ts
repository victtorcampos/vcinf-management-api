import { type Contador as TypeContador, type Endereco as TypeEndereco, type $Enums, PrismaClient } from "../../config/prisma-client";
import { createContador, deleteContador, updateContador } from "../../controller";
import { getUserAuth, isAdminAuth } from "../../services/authService";
import type { ApiResponse } from "../../utils";

const prisma = new PrismaClient().contador;

export interface TypeContadorInput extends TypeContador {
    endereco: TypeEndereco;
}

export const ContadorResolvers = {
    Mutation: {
        createContador: async (_: any, args: { data: TypeContadorInput }, context: any) => {
            const user = getUserAuth(context.req);
            isAdminAuth(user);
            
            const resultCreate = await prisma.create({
                data: {
                    ...args.data, usuarios: {
                        create: {
                            userId: user.userId
                        }
                    },
                    endereco: {
                        create: {
                            ...args.data.endereco
                        }
                    }
                }
            });

            console.log(resultCreate);

    


            return { ...args.data, id: "1" };
        },
    },
    Query: {
        // Defina os resolvers das queries se necessário
    },
};