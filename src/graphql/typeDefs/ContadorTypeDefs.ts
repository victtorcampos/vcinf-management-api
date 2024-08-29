import { gql } from 'apollo-server';

export const ContadorTypeDefs = gql`

scalar Date

# Definição dos tipos de dados
type TypeContador {
  id: ID!
  nome: String
  cpf: String
  regcrc: String
  telefone: String
  email: String
  endereco : TypeEndereco
  certificados: [TypeCertificados]
  usuarios: [TypeUsuarios]
}
  type TypeEndereco {
    id: ID!
  }
  
  type TypeCertificados {
    id: ID!
  }

  type TypeUsuarios {
    id: ID!
  }

  type ContadorResponse {
    success: Boolean!
    data: TypeContador
    error: ErrorResponse
  }

  type ErrorResponse {
    message: String!
    code: String
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

type Certificado {
  requerente: String!
  fileBase64: String
  validade: Date
}

input ContadorInput {
  nome :String!
  cpf: String!
  regcrc: String!
  telefone: String
  email: String!
  endereco: EnderecoInput
  certificados: [CertificadoInput]
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


input CertificadoInput {
  requerente: String
  fileBase64: String #Arquivo BASE64
  validade: Date
}

# Definição das mutações
type Mutation {
  createContador(data: ContadorInput): ContadorResponse
}

# Definição da query raiz (opcional, se necessário)
type Query {
  # Aqui você pode adicionar queries conforme necessário, por exemplo:
  listContadores: [TypeContador!]!
}

# Definição do schema
schema {
  query: Query
  mutation: Mutation
}
 
`;