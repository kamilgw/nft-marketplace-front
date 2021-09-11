import { useGetFavouritesNftsQuery } from 'generated/graphql';
import { useMemo } from 'react';
import { isServer } from 'utils/ssr';

export const useFilterFavourites = (nftIds: string[]): undefined | Set<string> => {
  const { data, error } = useGetFavouritesNftsQuery({
    variables: {
      nftIds: nftIds,
    },
    fetchPolicy: 'no-cache',
    skip: isServer,
  });
  return useMemo(() => {
    if (!data?.getFavouritesNfts || error) {
      return undefined;
    }
    return new Set(data.getFavouritesNfts);
  }, [data]);
};
