import { Col, Row } from 'antd';
import React from 'react';
import { NftCard } from 'components/organisms/nftCard';
import { DefaultLayout } from 'components/layouts/defaultLayout';
import {Nft, NftCategory} from 'generated/graphql';
import { PriceHistory } from 'components/organisms/priceHistory';
import { NftDescriptionCard } from 'components/organisms/nftDescriptionCard';
import { NftAbout } from 'components/organisms/nftAbout';

const gap: [number, number] = [16, 16];
export interface NftPageProps {
  nft: Nft;
  categories: NftCategory[];
}
export const NftPage: React.FC<NftPageProps> = ({ nft, categories }) => {
  return (
    <DefaultLayout>
      <Row gutter={gap} justify='center'>
        <Col xs={24} md={10} xl={8}>
          <NftCard nft={nft} categories={categories} />
        </Col>
        <Col xs={24} md={14} xl={16}>
          <Row gutter={gap}>
            <Col span={24}>
              <NftDescriptionCard issuer={nft?.nftIssuer} description={nft?.description} />
            </Col>
            <NftAbout
              sale={nft.sale}
              ownerName={nft.ownerName}
            />
            <Col span={24}>
              <PriceHistory
                flatRatePriceHistory={nft.priceHistory}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </DefaultLayout>
  );
};
