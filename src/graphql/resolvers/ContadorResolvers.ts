
import type { $Enums } from "../../config/prisma-client";
import { createContador, deleteContador, updateContador } from "../../controller";
import type { ApiResponse } from "../../utils";

interface CreateContadorData { nome: string; cpf: string; regcrc: string; telefone: string; email: string; enderecos: CreateEnderecoData[]; }
interface CreateEnderecoData { tipo?: string; logradouro: string; nro: string; complemento?: string; bairro: string; cep: string; nome_cidade: string; codigoIBGEcidade: string; nome_estado: string; uf: string; codigoIBGEestado: string; }
interface Contador { id: string; nome: string; cpf: string; usuarios: User[]; };
interface User { id: string; email: string; role: $Enums.Role; };
interface UpdateContadorData { nome: string; cpf: string; }

type Context = { req: Request; };
export const ContadorResolvers = {
    Mutation: {
        updateContador: async (_: any, { id, data }: { id: string; data: UpdateContadorData }, context: Context): Promise<ApiResponse<Contador>> => await updateContador(id, data, context),
        createContador: async (_: any, { data }: { data: CreateContadorData }, context: Context): Promise<ApiResponse<Contador>> => await createContador(data, context),
        deleteContador: async (_: any, { id }: { id: string }, context: Context): Promise<ApiResponse<{ message: string }>> => await deleteContador(id, context),
    },
    Query: {
        // Defina os resolvers das queries se necessário
    },
};