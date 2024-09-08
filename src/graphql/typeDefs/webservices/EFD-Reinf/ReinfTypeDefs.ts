import { gql } from "apollo-server";

export const ReinfTypeDefs = gql`
    scalar Date

    input createReinfR2099Input {
        periodo: Date
        cnpj: String
    }

    input sendReinfR2099Input {
        id: ID!
    }

    type EnvioReinfType{
        id: ID!
        evento: String!
        periodo: Date!
        recibo: String
        dateEnvio: Date
        protocoloEnvioLote: String
        xml: String!
        status: StatusEventoReinf!
        paiId: ID
        erro: String
        createdAt: Date!
        emitenteId: ID
    }

    enum StatusEventoReinf {
        CRIADO
        PENDENTE
        ASSINADO
        ENVIADO
        ERROR
        CONFIRMADO
        OUTRO
    }

    type Mutation {
        createReinfR2099(data: createReinfR2099Input): EnvioReinfType
        sendReinfR2099(id: ID!): EnvioReinfType
        signReinfR2099(id: ID!): EnvioReinfType
    }

    type Query {
        enviarReinfTotal: [EnvioReinfType!]
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;