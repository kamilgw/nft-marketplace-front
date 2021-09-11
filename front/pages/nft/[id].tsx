import { NftPage, NftPageProps } from 'components/pages/nftPage';
import { GetServerSideProps } from 'next';
import { client } from 'utils/client';
import { ListCategoriesDocument, NftDocument } from 'generated/graphql';

export const getAllCategories = async () => {
  const { data } = await client.query({
    query: ListCategoriesDocument,
  });
  return data.categories;
};

export const getServerSideProps: GetServerSideProps<NftPageProps, { id: string }> = async ({
  params,
}) => {
  const { id } = params ?? {};
  const [categories, { data }] = await Promise.all([
    getAllCategories(),
    client.query({
      query: NftDocument,
      variables: {
        id: id,
      },
    }),
  ]);
  const nft = data.nft;
  return { props: { nft, categories } };
};

export default NftPage;
