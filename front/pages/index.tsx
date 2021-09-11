import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { SideMenuLayout } from 'components/layouts/sideMenuLayout';
import { Nft, PageInfo } from 'generated/graphql';
import { NftPaginatedList } from 'components/pages/nftPaginatedList';
import { getAllNfts } from 'utils/queries';

export interface PageProps {
  allNfts: Nft[];
  pageInfo: PageInfo | undefined | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
  const { data } = await getAllNfts(query, {
  });

  const allNfts = data?.nfts?.edges?.map(({ node }: any) => node) || [];
  const pageInfo = data?.nfts?.pageInfo;

  return {
    props: {
      allNfts,
      pageInfo,
    },
  };
};

const Page: NextPage<PageProps> = props => {
  return (
      <SideMenuLayout>
        <NftPaginatedList data={props.allNfts} pageInfo={props.pageInfo} hideFilterButton />
      </SideMenuLayout>
  );
};

export default Page;
