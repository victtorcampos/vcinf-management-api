import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from './config/prisma-client';
import { AuthTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, ServicesTypeDefs, UsuarioTypeDefs } from './graphql/typeDefs';
import { AuthResolvers, ContadorResolvers, EmitenteResolvers, ServicesResolvers, UsuarioResolvers } from './graphql/resolvers';


const prisma = new PrismaClient();
const typeDefs = [UsuarioTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, AuthTypeDefs, ServicesTypeDefs];
const resolvers = [ContadorResolvers, UsuarioResolvers, EmitenteResolvers, AuthResolvers, ServicesResolvers]

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return { prisma, req, }; }, });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});