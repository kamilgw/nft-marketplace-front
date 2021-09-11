import React  from 'react';
import { Col, Row } from 'antd';
import { Nft, PageInfo } from 'generated/graphql';
import { NftList } from 'components/organisms/nftList';
import { NextPrevPagination } from 'components/organisms/nextPrevPagination';

export interface RefreshNftsButtonProps {
  checkForNft: () => Promise<void>;
  inProgress: boolean;
}

export interface NftPaginatedListProps {
  data: Nft[];
  pageInfo: PageInfo | undefined | null;
  refreshNftsButton?: RefreshNftsButtonProps;
  hideFilterButton?: boolean;
  hideSortDropdown?: boolean;
}

const gap: [number, number] = [16, 16];

export const NftPaginatedList: React.FC<NftPaginatedListProps> = props => {
  const nfts = props.data;
  return (
    <Row gutter={gap}>
      <Col span={24}>
      </Col>
      <div id='nft-list' style={{ paddingTop: '80px', marginTop: '-80px' }} />
      <NftList data={nfts} />
      <Col span={24}>
        <NextPrevPagination pageInfo={props.pageInfo} listId='nft-list' />
      </Col>
    </Row>
  );
};
