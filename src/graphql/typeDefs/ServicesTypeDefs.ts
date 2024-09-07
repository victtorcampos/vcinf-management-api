import { gql } from "apollo-server";

export const ServicesTypeDefs = gql`
    scalar Date

    input EnvioReinfInput {
        periodo: Date
        cnpj: String
    }

    type Mutation {
        sendReinfCompleta(data: EnvioReinfInput): String
    }

   

    schema {
        query: Query
        mutation: Mutation
    }
`;