// @ts-ignore
import styles from './nftDescriptionCard.module.scss';
import { Avatar, Card, Typography } from 'antd';
import React from 'react';
import { Nft } from 'generated/graphql';
import Link from 'next/link';
import { capitalizeFirstLetter } from 'utils/strings';

interface NftDescriptionCard {
  description?: string;
  issuer: Nft['nftIssuer'];
}

export const NftDescriptionCard: React.FC<NftDescriptionCard> = ({ description, issuer }) => {
  return (
    <Card title='Description'>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <Link href={`/user/${issuer?.name}/nft`}>
            <Avatar size={30} icon={<img src={issuer?.avatarUrl} />} />
          </Link>
        </div>
        <Typography.Paragraph className={styles.author}>
          Created by{' '}
          <Link href={`/user/${issuer?.name}/nft`}>{capitalizeFirstLetter(issuer?.name)}</Link>
        </Typography.Paragraph>
      </div>
    </Card>
  );
};
