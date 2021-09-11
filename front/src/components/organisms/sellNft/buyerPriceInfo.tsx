import { Col, Row, Typography } from 'antd';
import helperStyles from '../../../utils/helperStyles';
import React from 'react';

const { Text } = Typography;

interface BuyerPriceInfoProps {
  price: string | [string, string];
  title?: string;
}

export const BuyerPriceInfo = (props: BuyerPriceInfoProps) => {
  const prices = (Array.isArray(props.price) ? props.price : [props.price]).map(v =>
    parseFloat(v),
  );
  const endPrice = prices.map(v => (Number.isNaN(v) ? '' : v.toString(10))).join(' - ');
  return (
    <Row>
      <Col span={12}>
        <Text strong>Total</Text>
      </Col>
      <Col span={12} className={helperStyles.textRight}>
        <Text strong>{endPrice} ZTI</Text>
      </Col>
    </Row>
  );
};
