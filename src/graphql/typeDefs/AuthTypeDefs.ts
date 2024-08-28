import { gql } from 'apollo-server';

export const AuthTypeDefs = gql`
# Definição dos tipos de dados

  type ErrorResponse {
    message: String!
    code: String
  }


  type AuthResponse {
    success: Boolean!
    data: String
    error: ErrorResponse
  }

  # Definição das mutações
  type Mutation {
    authenticateUser(email: String!, password: String!): AuthResponse!
  }

  # Definição das queries
  type Query {

  }

  # Definição do schema
  schema {
    query: Query
    mutation: Mutation
  }

`;