import React from 'react';
import { Col, Row } from 'antd';
import { CategoryCard } from 'components/molecules/categoryCard';
import { NftCategory } from 'generated/graphql';

const gap: [number, number] = [16, 16];

export interface NftListProps {
  data: NftCategory[];
}
export const CategoriesList: React.FC<NftListProps> = props => {
  return (
    <Col span={24}>
      <Row gutter={gap} justify='start'>
        {props.data.map((category, index) => (
          <Col key={index} xs={24} md={8} xl={6}>
            <CategoryCard {...category} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};
