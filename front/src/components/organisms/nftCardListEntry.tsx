// @ts-ignore
import styles from './nftCardListEntry.module.scss';
import Link from 'next/link';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Nft } from 'generated/graphql';
import { capitalizeFirstLetter } from 'utils/strings';
import { NftLike } from 'components/molecules/nftLike';
import { NftPrice } from 'components/molecules/nftPrice';

export interface NftCardListEntryProps {
  nft: Nft;
  favourite?: boolean;
}
export const NftCardListEntry: React.FC<NftCardListEntryProps> = ({ nft, favourite }) => {
  return (
    <Link href={`/nft/${nft.id}`}>
      <Card
        className={`${nft?.name} ${styles.card}`}
        cover={
          <img
            alt={`Content of ${nft?.name}`}
            className={styles.image}
            src={nft?.assetUrl}
          />
        }
        title={<NftLike initialState={favourite} nftId={nft.id} />}
        hoverable={true}>
        <Row>
          <Col span={24}>
            <Typography.Text>
              {nft.ownerName ? (
                <Link href={`/user/${nft.ownerName}/nft`}>
                  {capitalizeFirstLetter(nft.ownerName)}
                </Link>
              ) : (
                '—'
              )}
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Title level={4}>{nft?.name}</Typography.Title>
          </Col>
          {nft.sale && (
            <NftPrice price={nft.sale.price} title='Price' listView={true} />
          )}
        </Row>
      </Card>
    </Link>
  );
};
