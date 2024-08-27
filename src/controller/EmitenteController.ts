import { ApiResponse, handleError, handleSuccess } from "../utils";

export interface EmitenteData {
    id: string;
    cod_dominio: string;
    nome: string;
    razao_social: string;
    cnpj: string;
    cpf: string;
    ie: string;
    enderecos: EnderecoData[];
}

interface EnderecoData {
    id: string;
    tipo: string;
    logradouro: string;
    nro: string;
    complemento: string;
    bairro: string;
    cep: string;
    nome_cidade: string;
    codigoIBGEcidade: string;
    nome_estado: string;
    uf: string;
    codigoIBGEestado: string;
}

export const createEmitente = async (
    data: EmitenteData,
    context: any
): Promise<ApiResponse<EmitenteData>> => {
    try {
        return handleSuccess(data);
    } catch (error) {
        return handleError("Erro desconhecido.");
    }
};
