import { gql } from 'apollo-server';

export const UsuarioTypeDefs = gql`

# Definição dos tipos de dados
  type Usuario {
    id: ID!
    email: String!
    role: Role!
  }

  enum Role {
    ADMIN
    USER
    NOOB
    SUPERVISOR
  }

  # Definição das respostas padronizadas
  type UsuarioResponse {
    success: Boolean!
    data: Usuario
    error: ErrorResponse
  }

  type UsuariosResponse {
    success: Boolean!
    data: [Usuario!]
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
  input CreateUsuarioInput {
    email: String!
    password: String!
    role: String!
  }

  input UpdateUsuarioInput {
    id: ID!
    email: String!
    password: String
    role: String!
  }

  type AuthResponse {
    success: Boolean!
    data: String
    error: ErrorResponse
  }

  # Definição das mutações
  type Mutation {
    createUsuario(data: CreateUsuarioInput!): UsuarioResponse!
    updateUsuario(data: UpdateUsuarioInput!): UsuarioResponse!
    deleteUsuario(id: ID!): DeleteResponse!
    authenticateUsuario(email: String!, password: String!): AuthResponse!
  }

  # Definição das queries
  type Query {
    Usuarios: UsuariosResponse!
    Usuario(id: ID!): UsuarioResponse!
  }

  # Definição do schema
  schema {
    query: Query
    mutation: Mutation
  }

`;