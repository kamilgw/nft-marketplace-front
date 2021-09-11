// @ts-ignore
import styles from './sellNft.module.scss';
import { Button, Form } from 'antd';
import React from 'react';

export const SellFooter: React.FC<{ loading: boolean; closeModal: () => void }> = ({
  closeModal,
  loading,
}) => (
  <Form.Item>
    <div className={styles.buttonsContainer}>
      <Button onClick={closeModal} disabled={loading} className={styles.cancelButton}>
        Cancel
      </Button>
      <Button htmlType='submit' type='primary' loading={loading}>
        Create a sale
      </Button>
    </div>
  </Form.Item>
);
