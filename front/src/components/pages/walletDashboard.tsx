// @ts-ignore
import styles from './ckbDashboard.module.scss';
import { Row, Col } from 'antd';
import React from 'react';
import { Balance } from 'components/organisms/balance';
import { TransactionHistory } from 'components/organisms/transactionHistory';
import { DefaultLayout } from 'components/layouts/defaultLayout';
import { UserDetails } from 'components/organisms/userDetails';
import { UserPageHeader } from 'components/organisms/userPageHeader';
import { ClientOnly } from 'components/atoms/clientOnly';
import { SessionQuery } from 'generated/graphql';

const gap: [number, number] = [16, 16];

interface CkbDashboardProps {
  session: SessionQuery['session'];
}

export const WalletDashboard: React.FC<CkbDashboardProps> = ({ session }) => {
  return (
    <DefaultLayout>
      <ClientOnly>
        <UserDetails userInfo={session} />
        <UserPageHeader />
        <Row gutter={gap}>
          <Col xs={24} md={12} xl={8} className={styles.alignCard}>
            <Balance />
          </Col>
          <Col span={24}>
            <TransactionHistory />
          </Col>
        </Row>
      </ClientOnly>
    </DefaultLayout>
  );
};
