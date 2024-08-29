import { type Contador as TypeContador, type Endereco as TypeEndereco, type $Enums, PrismaClient, type Certificado as TypeCertificado, type Usuario as TypeUsuario, type UsuarioContador as TypeUsuarioContador, Prisma, } from "../config/prisma-client";
import { getUserAuth, isAdminAuth } from "../services/authService";
import { handleError, handleSuccess, type ApiResponse, } from "../utils/responseHandler";

const prisma = new PrismaClient({
  //log: ['query', 'info', 'warn', 'error'],
}).contador;

export interface TypeContadorInput extends TypeContador {
  certificados: TypeCertificado[];
  endereco: TypeEndereco;

}

export interface TypeContadorResponse extends TypeContador {
}

export const createContador = async (data: TypeContadorInput, context: any): Promise<ApiResponse<TypeContadorResponse>> => {

  try {
    const usuario = getUserAuth(context.req);
    isAdminAuth(usuario);
    const contador = await prisma.create({
      data: {
        ...data, usuarios: { create: { usuarioId: usuario.userId } },
        endereco: { create: { ...data.endereco } },
        certificados: { create: [{ ...data.certificados[0], validade: new Date("2025-12-31T23:59:59Z") }] }
      },
      include: { endereco: true, certificados: true, usuarios: true }
    });

    return handleSuccess(contador);

  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return handleError("Contador Já existe.", error.code);
      }
    }
    return handleError("Erro desconhecido.");
  }
};
