import React, { useCallback, useMemo } from 'react';
import { BuyFlow } from 'components/organisms/buyNft/buyFlow';
import {
  useBuySaleMutation,
  Sale,
} from 'generated/graphql';
import {  ShoppingOutlined } from '@ant-design/icons';
import { assertIsNonNullable } from 'utils/types';

export const BuyFlatRateNft: React.FC<{sale: Sale, nftId: string}> = ({  sale, nftId }) => {
  const price = useMemo(
    () => sale.price,
    [sale.price],
  );
  const [mutate] = useBuySaleMutation();
  const buy = useCallback(async () => {
    const result = await mutate({
      variables: {
        saleId: sale.id,
      },
    });
    assertIsNonNullable(result.data);
    return result.data;
  }, [mutate, sale.id]);

  return (
    <BuyFlow
      nftId={nftId}
      buy={buy}
      buttonIcon={<ShoppingOutlined />}
      buttonText='BUY NOW'
      submitButtonText='Buy NFT'
      price={price}
    />
  );
};

