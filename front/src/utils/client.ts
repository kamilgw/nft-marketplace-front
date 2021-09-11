import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client';
import getConfig from 'next/config';
import {onError} from '@apollo/client/link/error';
import { isServer} from './ssr';
import {captureException} from '@sentry/nextjs';

const { publicRuntimeConfig } = getConfig();


const makeRequest = async (info: RequestInfo, options?: RequestInit) => {
  let token;
  if (typeof window !== "undefined") {

    token = localStorage.getItem('accessToken');

  }

  console.log(token);
  const newHeaders = {
    ...(options?.headers ? options.headers : {}),
    authorization: `Bearer ${token}`,
  };

  return await fetch(info, {
    ...options,
    headers: newHeaders,
  });
};

export const httpLink = createHttpLink({
  // Runtime config is not available during build
  uri: `${publicRuntimeConfig?.API_URL}/graphql`,
  credentials: 'include',
  fetch: async (info, init) => {
    // If request fails potentially due to csrf, fetch token & ret

      return await makeRequest(info, init);
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(error => {
      captureException(error);
      const { message, locations, path } = error;
      // eslint-disable-next-line no-console
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  if (networkError) {
    captureException(networkError);
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
  // Disable cache on server completely
  defaultOptions: isServer
      ? {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      }
      : undefined,
});
