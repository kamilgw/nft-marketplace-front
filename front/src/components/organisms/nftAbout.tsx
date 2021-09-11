// @ts-ignore
import styles from 'components/pages/nftPage.module.scss';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import Link from 'next/link';
import { capitalizeFirstLetter } from 'utils/strings';
import React from 'react';
import { Sale } from 'generated/graphql';

const gap: [number, number] = [16, 16];
interface NftAboutProps {
  sale?: Sale | null;
  ownerName?: string | null;
}
export const NftAbout: React.FC<NftAboutProps> = ({ sale, ownerName }) => {
  return (
    <Col span={24}>
      {sale && (
        <Card title='About'>
          <Row gutter={gap}>
            <Col span={12}>
              <Statistic title='Added on' value={new Date(sale?.timeAdded).toLocaleString()} />
            </Col>
            <Col span={12}>
              <div className={styles.statisticOwnerTitle}>
                <Typography.Text type='secondary'>Owner</Typography.Text>
              </div>
              <Typography.Text className={styles.statisticOwnerLink}>
                {ownerName ? (
                  <Link href={`/user/${ownerName}/nft`}>{capitalizeFirstLetter(ownerName)}</Link>
                ) : (
                  '—'
                )}
              </Typography.Text>
            </Col>
          </Row>
        </Card>
      )}
    </Col>
  );
};
