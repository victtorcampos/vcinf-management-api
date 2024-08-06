import { gql } from 'apollo-server';

export const ContadorTypeDefs = gql`

# Definição dos tipos de dados
  type User {
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
  type UserResponse {
    success: Boolean!
    data: User
    error: ErrorResponse
  }

  type UsersResponse {
    success: Boolean!
    data: [User!]
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
  input CreateUserInput {
    email: String!
    password: String!
    role: String!
  }

  input UpdateUserInput {
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
    createUser(data: CreateUserInput!): UserResponse!
    updateUser(data: UpdateUserInput!): UserResponse!
    deleteUser(id: ID!): DeleteResponse!
    authenticateUser(email: String!, password: String!): AuthResponse!
  }

  # Definição das queries
  type Query {
    users: UsersResponse!
    user(id: ID!): UserResponse!
  }

  # Definição do schema
  schema {
    query: Query
    mutation: Mutation
  }

`;