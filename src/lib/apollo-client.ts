import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { schema } from '@/apollo/schema';
import merge from 'deepmerge';

let apolloClient: ApolloClient<any> | null = null;

function createApolloClient(ssr = false) {
  const link = ssr
    ? new SchemaLink({ schema }) // برای SSR بدون درخواست HTTP
    : new HttpLink({
        uri: '/api/graphql',
        credentials: 'same-origin',
      });

  return new ApolloClient({
    ssrMode: ssr,
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null, ssr = false) {
  const _apolloClient = apolloClient ?? createApolloClient(ssr);

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(existingCache, initialState);
    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
