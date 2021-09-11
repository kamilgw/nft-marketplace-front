import { Col, Row, Typography } from 'antd';
import React from 'react';
import { SessionQuery, UserInfoQuery } from 'generated/graphql';

const { Title } = Typography;

export interface UserDetailsProps {
  userInfo: SessionQuery['session'] | UserInfoQuery['userByName'];
  avatarUrl?: string;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ userInfo }) => {
  return (
    <Row style={{ paddingBottom: 40 }}>
      <Col xs={16} md={20} xl={21}>
        <Title level={2}>{userInfo?.username}</Title>
      </Col>
    </Row>
  );
};
