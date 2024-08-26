import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from './config/prisma-client';
import { ContadorTypeDefs, EmitenteTypeDefs, UserTypeDefs } from './graphql/typeDefs';
import { ContadorResolvers, EmitenteResolvers, UserResolvers } from './graphql/resolvers';

const prisma = new PrismaClient();
const typeDefs = [UserTypeDefs, ContadorTypeDefs, EmitenteTypeDefs];
const resolvers = [ContadorResolvers, UserResolvers, EmitenteResolvers]

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return { prisma, req, }; }, });
//teste
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});