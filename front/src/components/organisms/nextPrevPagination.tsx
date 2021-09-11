// @ts-ignore
import styles from 'components/organisms/nextPrevPagination.module.scss';
import React from 'react';
import { PageInfo } from 'generated/graphql';
import Link from 'next/link';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export interface NextPrevPaginationProps {
  pageInfo: PageInfo | undefined | null;
  listId: string;
}

export const NextPrevPagination: React.FC<NextPrevPaginationProps> = props => {
  const { query } = useRouter();
  const { last, before, ...queryNext } = query;
  const { first, after, ...queryPrev } = query;

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationButton}>
        <Link
          href={{
            query: {
              ...queryPrev,
              last: query.count || 12,
              before: props?.pageInfo?.startCursor,
            },
            hash: 'nft-list',
          }}>
          <Button icon={<LeftOutlined />} disabled={!(after || props?.pageInfo?.hasPreviousPage)}>
            Prev
          </Button>
        </Link>
      </div>
      <div className={styles.paginationButton}>
        <Link
          href={{
            query: {
              ...queryNext,
              first: query.count || 12,
              after: props?.pageInfo?.endCursor,
            },
            hash: 'nft-list',
          }}>
          <Button disabled={!(before || props?.pageInfo?.hasNextPage)}>
            Next <RightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  );
};
