import { gql } from 'apollo-server';

export const AuthTypeDefs = gql`

  type AuthResponse {
    success: Boolean!
    token : String
    error: ErrorResponse
  }

  type ErrorResponse {
    message: String!
    code: String
  }

  # Definição das mutações
  type Mutation {
    authUsuario(email: String!, password: String!): AuthResponse
    authContador(id : ID!): AuthResponse
  }

  type Query {
    getToken: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;