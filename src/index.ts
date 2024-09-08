import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from './config/prisma-client';
import { AuthTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, ReinfTypeDefs, UsuarioTypeDefs } from './graphql/typeDefs';
import { AuthResolvers, ContadorResolvers, EmitenteResolvers, ReinfResolvers, UsuarioResolvers } from './graphql/resolvers';


const prisma = new PrismaClient();
const typeDefs = [UsuarioTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, AuthTypeDefs, ReinfTypeDefs];
const resolvers = [ContadorResolvers, UsuarioResolvers, EmitenteResolvers, AuthResolvers, ReinfResolvers]

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return { prisma, req, }; }, });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});