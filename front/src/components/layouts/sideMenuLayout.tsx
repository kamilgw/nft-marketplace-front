// @ts-ignore
import styles from 'components/layouts/sideMenuLayout.module.scss';
import React from 'react';
import { Layout } from 'antd';
import { Header } from 'components/organisms/header';
import { Footer } from 'components/organisms/footer';
import { CenteredContent } from 'components/layouts/centeredContent';

const { Content } = Layout;

export const SideMenuLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content className={styles.content}>
        <Layout>
          <div>
          </div>
          <Content>
            <CenteredContent>{children}</CenteredContent>
          </Content>
        </Layout>
      </Content>
      <Footer />
    </Layout>
  );
};
