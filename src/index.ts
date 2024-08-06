import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from './config/prisma-client';
import { ContadorTypeDefs, EmpresaTypeDefs, UserTypeDefs } from './graphql/typeDefs';
import { ContadorResolvers, EmpresaResolvers, UserResolvers } from './graphql/resolvers';

const prisma = new PrismaClient();
const typeDefs = [UserTypeDefs, ContadorTypeDefs, EmpresaTypeDefs];
const resolvers = [ContadorResolvers, UserResolvers, EmpresaResolvers]

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return { prisma, req, }; }, });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
