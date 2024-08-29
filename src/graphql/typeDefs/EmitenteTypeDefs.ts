import { gql } from 'apollo-server';

export const EmitenteTypeDefs = gql`

  type TypeEmitente {
    id: ID!
    cod_dominio: String
    nome: String
    razao_social: String
    cnpj: String
    cpf: String
    IE: String
    enderecos: [TypeEndereco]
  }

  type EmitenteResponse {
    success: Boolean!
    data: TypeEmitente
    error: ErrorResponse
  }

  type ErrorResponse {
    message: String!
    code: String
  }
  
  input EmitenteInputCreate{
    cod_dominio: String
    nome: String
    razao_social: String
    cnpj: String
    cpf: String
    IE: String
    enderecos: [EnderecoInput]
  }

  type Mutation {
    createEmitente(data : EmitenteInputCreate): EmitenteResponse
    findIdEmitente(id: ID!): EmitenteResponse
  }

  type Query {
  # Aqui você pode adicionar queries conforme necessário, por exemplo:
    Emitentes: [TypeEmitente!]!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;