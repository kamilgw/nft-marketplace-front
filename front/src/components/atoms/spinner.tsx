// @ts-ignore
import styles from './spinner.module.scss';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

export const PageSpinner: React.FC = () => {
  return (
    <div className={styles.fixedContainer}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export const Spinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <Spin indicator={antIcon} />
    </div>
  );
};
