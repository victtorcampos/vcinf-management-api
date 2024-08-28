import { create } from "domain";
import { type Contador as TypeContador, type Endereco as TypeEndereco, type $Enums, PrismaClient, type Certificado as TypeCertificado } from "../../config/prisma-client";
import { createContador, deleteContador, updateContador } from "../../controller";
import { getUserAuth, isAdminAuth } from "../../services/authService";
import type { ApiResponse } from "../../utils";
const prisma = new PrismaClient().contador;
export interface TypeContadorInput extends TypeContador {
    certificados: TypeCertificado[];
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
                    },
                    certificados: {
                        create: [{...args.data.certificados[0], validade: new Date("2025-12-31T23:59:59Z")}]

                    }
                },
                include: { endereco: true, certificados: true, usuarios: true }
            });




            return resultCreate;
        },
    },
    Query: {
        // Defina os resolvers das queries se necessário
    },
};