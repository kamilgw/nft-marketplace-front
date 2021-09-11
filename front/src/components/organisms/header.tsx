// @ts-ignore
import styles from './header.module.scss';
import React from 'react';
import Link from 'next/link';
import {Button, Layout, Menu} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useSessionQuery } from 'generated/graphql';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const { pathname, asPath } = useRouter();
  const { data } = useSessionQuery();
  const { Header } = Layout;
  const selectedKey = asPath.includes(`user/${data?.session?.username}`) ? 'user' : pathname;
  return (
    <Header className={styles.header}>
      <Link href='/'>
        <img
          className={styles.logo}
          src='https://d1iczm3wxxz9zd.cloudfront.net/366764c7-83b5-465b-acd1-1fb7b640087c/000000-0000000000/74362582513163274904907922796924749185016087725098866071038077672305200268165/ITEM_PREVIEW1.jpg'
          alt='app logo'
          height={48}
        />
      </Link>
      <Menu
        theme='light'
        mode='horizontal'
        className={styles.menu}
        expandIcon={<MenuOutlined />}
        selectedKeys={[selectedKey]}>
        <Menu.Item className={styles.menuItem} key='/'>
          <Link
            href={{
              pathname: '/',
              hash: 'nft-list',
            }}>
            All sales
          </Link>
        </Menu.Item>
        {data?.session ? (
          <>
            <Menu.Item className={styles.menuItem} key='user'>
              <Link href={`/user/${data.session.username}/ckb`}>Your account</Link>
            </Menu.Item>
            <Menu.Item className={styles.menuItem} key='logout'>
              <Button onClick={()=> {
                  localStorage.removeItem('accessToken');
              }}>Logout</Button>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item className={styles.menuItem} key='login'>
            <Link href='/login'>Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
