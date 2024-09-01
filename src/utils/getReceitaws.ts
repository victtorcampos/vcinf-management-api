import axios from "axios"
import { PrismaClient, type Emitente, type Endereco } from "../config/prisma-client";

const prisma = new PrismaClient({
    //log: ['query', 'info', 'warn', 'error'],
}).emitente;

const prismaEndereco = new PrismaClient({
    //log: ['query', 'info', 'warn', 'error'],
}).endereco;

interface TypeEmitente extends Emitente {
    enderecos: [Endereco]
}

export const getReceitaws = async (cnpj: string): Promise<TypeEmitente | null> => {
    const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`, {
        headers: {
            Authorization: 'Bearer b26ad79d7819dd2815acbe5e1e2ff62d1e90759d893bafa8f4354adf34a0463a'
        }
    });
    if (response.status === 200) {
        console.log(response.data);
        
        if (response.data.situacao === "BAIXADA") {
            console.log(response.data.situacao);            
       
        }

       // return { ...emitente, enderecos: [endereco] }
       return null;
    }
    return null;
}