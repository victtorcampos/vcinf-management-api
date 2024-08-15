import { ApiResponse, handleError } from "../utils";

export const createEmitente = async (data: any, context: any): Promise<ApiResponse<any>> => {
    try {
        console.log(data);
        return data;
    } catch (error) {
        return handleError('Erro desconhecido.');
    }
}; 