// @ts-ignore
import styles from './nftCard.module.scss';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { SellNft } from 'components/organisms/sellNft';
import {  BuyFlatRateNft } from 'components/organisms/buyNft';
import { useSessionQuery } from 'generated/graphql';
import { CancelNftSale } from 'components/organisms/cancelNftSale';
import { NftPageProps } from 'components/pages/nftPage';
import { NftLike } from 'components/molecules/nftLike';
import { useFilterFavourites } from 'hooks/filterFavourites';
import { NftPrice } from 'components/molecules/nftPrice';
import { getSaleType, SalesTypes } from 'models/salesTypes';

export const NftCard: React.FC<NftPageProps> = ({ nft }) => {
  const { data } = useSessionQuery();
  // Careful, ternary logic here
  const isOwner = data?.session?.username && data.session?.username === nft.ownerName;
  const favourites = useFilterFavourites([nft.id]);
  const onSale = nft.sale;
  return (
    <Card
      className={nft.name}
      cover={
        <img
          alt={`Content of ${nft.name}`}
          className={styles.image}
          src={nft.assetUrl}
        />
      }
      title={<NftLike initialState={favourites?.has(nft.id)} nftId={nft.id} />}>
      <Row gutter={[16, 16]} align='bottom'>
        <Col span={24}>
          <Typography.Title className={styles.title} level={1}>
            {nft.name}
          </Typography.Title>
        </Col>
        {nft.sale && <NftPrice price={nft.sale.price} title='Price' />}
        {nft.sale && isOwner === false && (
          <Col span={12}>
            <BuyFlatRateNft nftId={nft.id} sale={nft.sale} />
          </Col>
        )}
        {onSale && isOwner && (
          <Col span={12}>
            <CancelNftSale
              nftId={nft.id}
              saleId={onSale.id}
              // We know it is on sale
              saleType={getSaleType(nft) as SalesTypes}
            />
          </Col>
        )}

        {!onSale && isOwner && (
          <>
            <Col span={12}>
              <SellNft nftId={nft.id} disableButton={false} />
            </Col>
          </>
        )}
      </Row>
    </Card>
  );
};
