// @ts-ignore
import styles from 'components/organisms/issuerDetails.module.scss';
import { Col, Row, Avatar, Typography, Tooltip } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react';
import Image from 'next/image';

const { Title } = Typography;
export interface IssuerDetailsProps {
  username?: string;
  avatarUrl?: string;
  isVerified: boolean;
}

export const IssuerDetails: React.FC<IssuerDetailsProps> = ({
  username,
  avatarUrl,
  isVerified,
}) => {
  return (
    <Row style={{ paddingBottom: 40 }}>
      <Col xs={8} md={4} xl={3}>
        <Avatar size={100} icon={avatarUrl ? <img src={avatarUrl} /> : <AntDesignOutlined />} />
      </Col>
      <Col xs={16} md={20} xl={21}>
        <Title level={2} className={styles.container}>
          <span className={styles.username}>{username}</span>
          {isVerified && (
            <Tooltip title='This account is verified'>
              <Image
                src='/static/verified-badge.svg'
                height={30}
                width={30}
                className={styles.verifiedBadge}
              />
            </Tooltip>
          )}
        </Title>
      </Col>
    </Row>
  );
};
