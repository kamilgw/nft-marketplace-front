import { QueryResult } from '@apollo/client';
import { SessionQuery, useSessionQuery } from 'generated/graphql';
import { useRouter } from 'next/router';

export const userMatchesSession = (session: SessionQuery['session'], username?: string) =>
  session?.username === username;

export const useCheckAccessToUserPage = (): QueryResult<SessionQuery> | Record<any, never> => {
  const { query, replace } = useRouter();
  const { username } = query;
  const session = useSessionQuery();

  if (!session.loading && session.data?.session?.username !== username) {
    replace('/');
    return {};
  }

  return { ...session };
};
