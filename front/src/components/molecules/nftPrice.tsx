import React from 'react';
import { Col, Statistic } from 'antd';

export const NftPrice: React.FC<{ title: string; price: number; listView?: boolean }> = ({
  price,
  title,
  listView,
}) => (
  <Col span={listView ? 24 : 12}>
    <Statistic
      title={title}
      value={price}
      prefix='ZTI'
    />
  </Col>
);
