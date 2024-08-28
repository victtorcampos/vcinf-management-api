import { type Contador as TypeContador, type Endereco as TypeEndereco, type $Enums, PrismaClient, type Certificado as TypeCertificado, type Usuario as TypeUsuario, Prisma, } from "../config/prisma-client";
import { getUserAuth, isAdminAuth } from "../services/authService";
import { handleError, handleSuccess, type ApiResponse, } from "../utils/responseHandler";

const prisma = new PrismaClient().contador;

export interface TypeContadorInput extends TypeContador {
  certificados: TypeCertificado[];
  endereco: TypeEndereco;
}

export interface TypeContadorResponse extends TypeContador {
  certificados: TypeCertificado[];
}

export const createContador = async (data: TypeContadorInput, context: any): Promise<ApiResponse<TypeContadorResponse>> => {
  try {
    const usuario = getUserAuth(context.req);
    isAdminAuth(usuario);

    const contador = await prisma.create({
      data: {
        ...data, usuarios: { create: { UsuarioId: usuario.userId } },
        endereco: { create: { ...data.endereco } },
        certificados: { create: [{ ...data.certificados[0], validade: new Date("2025-12-31T23:59:59Z") }] }
      },
      include: { endereco: true, certificados: true, usuarios: true }
    });

    console.log({
      ...contador,
      certificados: contador.certificados,
      endereco: contador.endereco,
      usuarios: contador.usuarios
    });


    return handleSuccess({
      ...contador,
      certificados: contador.certificados,
      endereco: contador.endereco,
      usuarios: contador.usuarios
    });

  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return handleError("Contador Já existe.", error.code);
      }
    }
    return handleError("Erro desconhecido.");
  }
};
