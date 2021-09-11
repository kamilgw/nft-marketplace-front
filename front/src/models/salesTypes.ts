import { Nft } from 'generated/graphql';

export enum SalesTypes {
  FLAT_TYPE = 'FlatRateSale',
}

export const getSaleType = (nft: Nft): SalesTypes | undefined => {
  if (nft.sale) {
    return SalesTypes.FLAT_TYPE;
  }
  return undefined;
};
