import { gql } from 'apollo-server';

export const EmitenteTypeDefs = gql`

  type TypeEmitente {
    id: ID!
    cod_dominio: String
    nome: String
    razao_social: String
    cnpj: String
    cpf: String
    ie: String
    enderecos: [TypeEndereco]
    contadores: [TypeContadorEmitente]
    usuarios: [TypeUsuarioEmitente]
  }

  type TypeContadorEmitente {
    contadorId: String
  }

  type TypeUsuarioEmitente {
    usuarioId: String
  }

  type EmitenteResponse {
    success: Boolean!
    data: TypeEmitente
    error: ErrorResponse
  }

  type deleteEmitenteResponse {
    success: Boolean!
    data: String
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
    ie  : String
    enderecos: [EnderecoInput]
  }

  type Mutation {
    createEmitente(data : EmitenteInputCreate): EmitenteResponse
    findIdEmitente(id: ID!): EmitenteResponse
    deleteIdEmitente(id: ID!): deleteEmitenteResponse
  }

  type Query {
  # Aqui você pode adicionar queries conforme necessário, por exemplo:
    emitentes: [TypeEmitente]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;