import { gql } from 'apollo-server';

export const UserTypeDefs = gql`
# Definição dos tipos de dados
type User {
  id: ID!
  email: String!
  role: Role
}

enum Role {
  ADMIN
  USER
  GUEST
}
type Contador {
  id: ID!
  nome: String!
  cpf: String!
  usuarios: [User!]!
  enderecos: [Endereco!]!
}

type Endereco {
  id: ID!
  tipo: String!
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

# Definição das respostas padronizadas
type ContadorResponse {
  success: Boolean!
  data: Contador
  error: ErrorResponse
}

type DeleteResponse {
  success: Boolean!
  data: DeleteMessage
  error: ErrorResponse
}

type DeleteMessage {
  message: String!
}

type ErrorResponse {
  message: String!
  code: String
}

# Definição dos inputs
input CreateContadorInput {
  nome: String!
  cpf: String!
  regcrc: String!
  telefone: String!
  email: String!
  enderecos: [CreateEnderecoInput!]!
}

# Definição dos inputs
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

input UpdateContadorInput {
  nome: String!
  cpf: String!
}

# Definição das mutações
type Mutation {
  createContador(data: CreateContadorInput!): ContadorResponse!
  updateContador(id: ID!, data: UpdateContadorInput!): ContadorResponse!
  deleteContador(id: ID!): DeleteResponse!
}

# Definição da query raiz (opcional, se necessário)
type Query {
  # Aqui você pode adicionar queries conforme necessário, por exemplo:
  getContador(id: ID!): Contador
  listContadores: [Contador!]!
}

# Definição do schema
schema {
  query: Query
  mutation: Mutation
}
 
`;