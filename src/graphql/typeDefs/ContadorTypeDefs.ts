import { gql } from 'apollo-server';

export const UserTypeDefs = gql`
# Definição dos tipos de dados
type Contador {
  id: ID!
  nome :String!
  cpf: String!
  regcrc: String!
  telefone: String
  email: String!
  endereco: Endereco
}

type Endereco {
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

input ContadorInput {
  nome :String!
  cpf: String!
  regcrc: String!
  telefone: String
  email: String!
  endereco: EnderecoInput
}

input EnderecoInput {
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

# Definição das mutações
type Mutation {
  createContador(data: ContadorInput) : Contador
}

# Definição da query raiz (opcional, se necessário)
type Query {
  # Aqui você pode adicionar queries conforme necessário, por exemplo:
  listContadores: [Contador!]!
}

# Definição do schema
schema {
  query: Query
  mutation: Mutation
}
 
`;