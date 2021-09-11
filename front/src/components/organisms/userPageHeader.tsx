import { Affix, Menu } from 'antd';
// @ts-ignore
import styles from 'components/organisms/userPageHeader.module.scss';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export const UserPageHeader: React.FC = () => {
  const { query, pathname } = useRouter();
  const { username } = query;

  return (
    <Affix offsetTop={60}>
      <Menu theme='light' mode='horizontal' className={styles.menu} selectedKeys={[pathname]}>
        <Menu.Item key='/user/[username]/ckb'>
          <Link href={`/user/${username}/ckb`}>CKB</Link>
        </Menu.Item>
        <Menu.Item key='/user/[username]/nft'>
          <Link href={`/user/${username}/nft`}>NFT</Link>
        </Menu.Item>
        <Menu.Item key='/user/[username]/favourites'>
          <Link href={`/user/${username}/favourites`}>Favourites</Link>
        </Menu.Item>
        <Menu.Item key='/user/[username]/create'>
          <Link href={`/user/${username}/create`}>Create NFT</Link>
        </Menu.Item>
      </Menu>
    </Affix>
  );
};
