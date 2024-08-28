import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from './config/prisma-client';
import { ContadorTypeDefs, EmitenteTypeDefs, UsuarioTypeDefs } from './graphql/typeDefs';
import { ContadorResolvers, EmitenteResolvers, UsuarioResolvers } from './graphql/resolvers';

const prisma = new PrismaClient();
const typeDefs = [UsuarioTypeDefs, ContadorTypeDefs, EmitenteTypeDefs];
const resolvers = [ContadorResolvers, UsuarioResolvers, EmitenteResolvers]

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return { prisma, req, }; }, });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});