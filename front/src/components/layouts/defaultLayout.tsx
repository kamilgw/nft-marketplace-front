// @ts-ignore
import styles from './defaultLayout.module.scss';
import React from 'react';
import { Layout } from 'antd';
import { Header } from 'components/organisms/header';
import { Footer } from 'components/organisms/footer';
import { CenteredContent } from 'components/layouts/centeredContent';

const { Content } = Layout;

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content className={styles.content}>
        <CenteredContent>{children}</CenteredContent>
      </Content>
      <Footer />
    </Layout>
  );
};
