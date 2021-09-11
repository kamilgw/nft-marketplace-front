// @ts-ignore
import styles from './nftList.module.scss';
import React from 'react';
import { Col, Row } from 'antd';
import { NftCardListEntry } from 'components/organisms/nftCardListEntry';
import { Nft } from 'generated/graphql';
import { useFilterFavourites } from 'hooks/filterFavourites';

const gap: [number, number] = [16, 16];

export interface NftListProps {
  data: Nft[];
}

export const NftList: React.FC<NftListProps> = props => {
  const favourites = useFilterFavourites(props.data.map(nft => nft.id));

  return (
    <Col span={24}>
      <Row gutter={gap} justify='start'>
        {props.data.map((nft, index) => (
          <Col key={index} xs={24} md={12} xl={6} className={styles.column}>
            <NftCardListEntry nft={nft} favourite={favourites?.has(nft.id)}/>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
