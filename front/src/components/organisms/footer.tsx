import React from 'react';
import { Row, Col, Divider, Layout, Typography } from 'antd';
import { CenteredContent } from 'components/layouts/centeredContent';

const { Title } = Typography;

export const Footer: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ background: 'white', marginTop: '40px' }}>
      <CenteredContent>
        <Row justify='center' gutter={16}>
          <Col>
            <Title level={5}> Discover</Title>
          </Col>
          <Col>
            <Title level={5}> Community</Title>
          </Col>
          <Col>
            <Title level={5}> About</Title>
          </Col>
          <Divider />
        </Row>
      </CenteredContent>
    </Footer>
  );
};
