import React from 'react';
import { DefaultLayout } from 'components/layouts/defaultLayout';
import { NftPaginatedList } from 'components/pages/nftPaginatedList';
import {
  UserInfoDocument,
  Nft,
  PageInfo,
  UserInfoQuery,
  UserInfoQueryVariables,
} from 'generated/graphql';
import { GetServerSideProps, NextPage } from 'next';
import { client } from 'utils/client';
import { UserNftPage } from 'components/pages/userNftPage';
import { getMultipleQueryValue } from 'utils/arrays';
import { getAllNfts } from 'utils/queries';

export interface UserNftPageProps {
  allNfts: Nft[];
  pageInfo: PageInfo | undefined | null;
  userInfo: NonNullable<UserInfoQuery['userByName']>;
}

export const getUserInfo = async (username: string | null) => {
  const { data } = await client.query<UserInfoQuery, UserInfoQueryVariables>({
    query: UserInfoDocument,
    variables: {
      username,
    },
  });
  return data.userByName;
};

export const getServerSideProps: GetServerSideProps<UserNftPageProps> = async ({ query }) => {
  const [username] = getMultipleQueryValue(query, ['username']);

  const userInfo = await getUserInfo(username);
  if (!userInfo) {
    return {
      notFound: true,
    };
  }

  const { data } = await getAllNfts(query, {
    ownerId: userInfo.id,
  });
  const allNfts = data?.nfts?.edges?.map(nft => nft?.node) || [];
  const pageInfo = data?.nfts?.pageInfo;

  return {
    props: {
      allNfts: allNfts as any as UserNftPageProps['allNfts'],
      pageInfo,
      userInfo,
    },
  };
};

const Page: NextPage<UserNftPageProps> = props => {
  return (
    <DefaultLayout>
      <UserNftPage deposit={true} userInfo={props.userInfo} />
      <NftPaginatedList
        data={props.allNfts}
        pageInfo={props.pageInfo}
        hideSortDropdown
      />
    </DefaultLayout>
  );
};

export default Page;
