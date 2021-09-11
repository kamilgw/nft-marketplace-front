// @ts-ignore
import styles from './categoryCard.module.scss';
import Link from 'next/link';
import { Card } from 'antd';
import React from 'react';
import { NftCategory } from 'generated/graphql';

export const CategoryCard: React.FC<NftCategory> = props => {
  return (
    <Link href={`/category/${props.name}`}>
      <Card className={`${props.name}`} hoverable={true}>
        <p className={styles.categoryName}>{props.name}</p>
      </Card>
    </Link>
  );
};
