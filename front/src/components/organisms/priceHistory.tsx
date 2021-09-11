import { Card } from 'antd';
import React, { useMemo } from 'react';
import {Sale} from 'generated/graphql';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface PriceHistoryProps {
  flatRatePriceHistory: Sale[];
}

interface MapPriceHistoryProps {
  purchasedOn?: any;
  price?: any;
}

const mapPriceHistory = (priceHistory: MapPriceHistoryProps[] | undefined) =>
  priceHistory
    ?.filter(s => s.price)
    .map(sale => {
      return {
        date: new Date(sale?.purchasedOn).toLocaleDateString(),
        price: parseFloat(sale?.price),
      };
    }) ?? [];

export const PriceHistory: React.FC<PriceHistoryProps> = props => {
  const allPriceHistory = useMemo(() => {
    const flatRateHistoryData = mapPriceHistory(props.flatRatePriceHistory) || [];
    return [...flatRateHistoryData];
  }, [props.flatRatePriceHistory]);

  if (allPriceHistory.length) {
    return (
      <Card title='Price History'>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              height={300}
              data={allPriceHistory}
              margin={{
                top: 10,
                bottom: 0,
                right: 30,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Line type='linear' dataKey='price' stroke='#1890ff' activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  } else {
    return <Card title='Price History'>No trading data yet</Card>;
  }
};
