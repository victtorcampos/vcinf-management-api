import { gql } from 'apollo-server';

export const EmitenteTypeDefs = gql`
type Contador {
  id: ID!
  nome: String
  cpf: String
  regcrc: String
  telefone: String
  email: String
}

type Emitente {
  id: ID!
  cod_dominio: String
  nome: String
  razao_social: String
  cnpj: String
  cpf: String
  ie: String
  enderecos: [Endereco]
  contador: [Contador]!
}

type Endereco {
  id: ID!
  tipo: String
  logradouro: String
  nro: String
  complemento: String
  bairro: String
  cep: String
  nome_cidade: String
  codigoIBGEcidade: String
  nome_estado: String
  uf: String
  codigoIBGEestado: String
}

input CreateEmitenteInput {
  cod_dominio: String
  nome: String
  razao_social: String
  cnpj: String
  cpf: String
  ie: String
  enderecos: [CreateEnderecoInput!]!
}

input CreateEnderecoInput {
  tipo: String
  logradouro: String!
  nro: String!
  complemento: String
  bairro: String!
  cep: String!
  nome_cidade: String!
  codigoIBGEcidade: String!
  nome_estado: String!
  uf: String!
  codigoIBGEestado: String!
}

type EmitenteResponse {
  success: Boolean!
  data: Emitente
  error: ErrorResponse
}

type ErrorResponse {
  message: String!
  code: String
}


type Mutation {
    emitente(data:CreateEmitenteInput!): EmitenteResponse!
    updateEmitente(id: ID!) : String
    deleteEmitente(id: ID!) : String
  }
`;