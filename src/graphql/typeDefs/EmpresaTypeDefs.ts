import { gql } from 'apollo-server';

export const EmpresaTypeDefs = gql`

type Mutation {
    createEmpresa(nome:String): String
    updateEmpresa(id: ID!) : String
    deleteEmpresa(id: ID!) : String
  }
`;