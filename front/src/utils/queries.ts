import { ApolloQueryResult } from '@apollo/client';
import { ListNftDocument, ListNftQuery, ListNftQueryVariables } from 'generated/graphql';
import { ParsedUrlQuery } from 'querystring';
import { getMultipleQueryValue } from './arrays';
import { client } from './client';

export const getAllNfts = async (
  parsedUrl: ParsedUrlQuery,
  variables?: Record<string, any>,
): Promise<ApolloQueryResult<ListNftQuery>> => {
  const [first, last, count] = getMultipleQueryValue(parsedUrl, [
    'first',
    'after',
    'before',
    'last',
    'minPrice',
    'maxPrice',
    'count',
  ]);

  return await client.query<any, ListNftQueryVariables>({
    query: ListNftDocument,
    // @ts-ignore
    variables: {
      ...(last ? { last: Number(last) } : { first: Number(first) || Number(count) || 12 }),
      ...variables
    },
  });
};
