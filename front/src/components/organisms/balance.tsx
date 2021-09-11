// @ts-ignore
import styles from './walletCard.module.scss'
import { Card, Col, Row, Skeleton, Statistic } from 'antd';
import React from 'react';
import helperStyles from 'utils/helperStyles';
import  {useWalletQuery} from 'generated/graphql';

export const Balance: React.FC = () => {
  const { data, loading } = useWalletQuery();
  return (
    <Card
      title='Balance'
      className={styles.card}>
      <Skeleton loading={!data} active>
        {data?.wallet && (
          <Row className={loading ? helperStyles.disabled : ''}>
            <Col span={24}>
              <Statistic
                title='Available'
                value={data.wallet.balance}
                suffix='ZTI'
              />
            </Col>
          </Row>
        )}
      </Skeleton>
    </Card>
  );
};
