import { Card, Table } from 'antd';
import React, { useState } from 'react';
import { useTransactionsQuery } from 'generated/graphql';
import { PaginationProps } from 'antd/lib/pagination';

export interface Transaction {
  date: string;
  id: string;
  type: 'NFT_PURCHASED' | 'NFT_SOLD';
  description: string;
  amount: number;
}

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Operation type',
    dataIndex: 'type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render(text: string) {
      return {
        props: {
          style: { color: parseInt(text) > 0 ? 'green' : 'red' },
        },
        children: <div>{text} CKB</div>,
      };
    },
  },
];

export interface PaginationTableProps {
  current?: number;
  pageSize: number;
  total?: number;
  pagesCount?: number;
}

export interface TransactionRecordProps {
  id: number;
  date: string;
  type: string;
  amount: number;
}

export const TransactionHistory = () => {
  const [tablePagination, setTablePagination] = useState<PaginationTableProps>({
    current: 1,
    pageSize: 3,
  });

  const [tableData, setTableData] = useState<TransactionRecordProps[]>([]);

  const onPageChange = (pagination: PaginationProps) => {
    setTablePagination({ ...tablePagination, current: pagination.current });
  };

  useTransactionsQuery({
    variables: {
    },
    onCompleted: data => {
      if (!data.transactions) {
        // Should never happen
        console.error('No transactions returned');
        return;
      }
      const list: TransactionRecordProps[] = data.transactions.map(
        (transaction, index: number) =>
          ({
            id: index,
            date: new Date(transaction?.timestamp).toLocaleString(),
            type: transaction?.type,
            amount: transaction?.amount,
          } as TransactionRecordProps),
      );
      setTableData(list);
    },
  });

  return (
    <Card title='Transaction History'>
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey='id'
        pagination={tablePagination}
        onChange={onPageChange}
      />
    </Card>
  );
};
