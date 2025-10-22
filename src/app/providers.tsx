// src\app\providers.tsx
'use client';

import { ApolloProvider } from '@apollo/client/react';
import { initializeApollo } from '@/lib/apollo-client';

export default function Providers({
  children,
  initialApolloState,
}: {
  children: React.ReactNode;
  initialApolloState?: any;
}) {
  const client = initializeApollo(initialApolloState);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
