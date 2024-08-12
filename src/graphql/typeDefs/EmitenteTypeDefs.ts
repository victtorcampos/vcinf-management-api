import { gql } from 'apollo-server';

export const EmitenteTypeDefs = gql`

type Mutation {
    createEmitente(nome:String): String
    updateEmitente(id: ID!) : String
    deleteEmitente(id: ID!) : String
  }
`;