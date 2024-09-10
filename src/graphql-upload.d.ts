declare module 'graphql-upload' {
    import { RequestHandler } from 'express';
    import { GraphQLScalarType } from 'graphql';
  
    export const GraphQLUpload: GraphQLScalarType;
    export const graphqlUploadExpress: (options?: { maxFileSize?: number; maxFiles?: number }) => RequestHandler;
  }
  