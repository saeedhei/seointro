// src/app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { schema } from '@/apollo/schema';

const server = new ApolloServer({
  schema,
  formatError: (error) => {
    console.error('GraphQL Error:', error);
    return error;
  },
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    const token = req.headers.get('authorization') ?? null;
    return { token };
  },
});

export { handler as GET, handler as POST };
