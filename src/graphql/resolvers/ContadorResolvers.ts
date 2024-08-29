import { create } from "domain";
import { type Contador as TypeContador, type Endereco as TypeEndereco, type $Enums, PrismaClient, type Certificado as TypeCertificado } from "../../config/prisma-client";
import { createContador } from "../../controller";
import { getUserAuth, isAdminAuth } from "../../services/authService";
import type { ApiResponse } from "../../utils";
const prisma = new PrismaClient().contador;
export interface TypeContadorInput extends TypeContador {
    certificados: TypeCertificado[];
    endereco: TypeEndereco;
}
export const ContadorResolvers = {
    Mutation: {
        createContador: async (_: any, args: { data: TypeContadorInput }, context: any): Promise<ApiResponse<TypeContador>> => await createContador(args.data, context),
    },
    Query: {
        // Defina os resolvers das queries se necessário
    },
};