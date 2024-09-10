import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from './config/prisma-client';
import { AuthTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, ReinfTypeDefs, UsuarioTypeDefs } from './graphql/typeDefs';
import { AuthResolvers, ContadorResolvers, EmitenteResolvers, MovimentoFiscalResolvers, ReinfResolvers, UsuarioResolvers } from './graphql/resolvers';
import { readFileSync } from 'fs';
import { graphqlUploadExpress } from 'graphql-upload-ts';
const prisma = new PrismaClient();
const schemaTypeDefs = readFileSync('./src/graphql/typeDefs/schema.graphql', { encoding: 'utf-8' });

const typeDefs = [UsuarioTypeDefs, ContadorTypeDefs, EmitenteTypeDefs, AuthTypeDefs, ReinfTypeDefs, schemaTypeDefs];
const resolvers = [ContadorResolvers, UsuarioResolvers, EmitenteResolvers, AuthResolvers, ReinfResolvers, MovimentoFiscalResolvers];

// Configurando o servidor Express
const app = express();

// Habilitando CORS
app.use(cors({
    origin: '*', // Permite que qualquer origem faça requisições
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
}));

// Middleware para uploads
app.use(graphqlUploadExpress({
    maxFileSize: 210000000, // 210MB de limite por arquivo
    maxFiles: 10 // Permitir até 10 arquivos
}));
// Ajustando o limite de tamanho do body
app.use(bodyParser.json({ limit: '210mb' }));
app.use(bodyParser.urlencoded({ limit: '210mb', extended: true }));


const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: ({ req }) => { return { prisma, req }; },
});

// Aplicando o middleware do Apollo Server ao Express
server.start().then(() => {
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});
