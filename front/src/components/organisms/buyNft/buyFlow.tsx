// @ts-ignore
import styles from './buyFlow.module.scss';
import { Button, Col, Modal, Row, Typography } from 'antd';
import React from 'react';
import helperStyles from 'utils/helperStyles';
import { useTrackAsyncFun } from 'hooks/trackAsync';
import { useRouter } from 'next/router';
import { useToggle } from 'react-use';
import { BuySaleMutation } from 'generated/graphql';

const { Text, Title } = Typography;

export interface BuyFlowProps {
  buttonText: string;
  submitButtonText: string;
  nftId: string;
  price?: number;
  buttonIcon?: React.ReactElement;
  buy: () => Promise<BuySaleMutation>;
  disabledButton?: boolean;
}

export const BuyFlow: React.FC<BuyFlowProps> = props => {
  const { replace } = useRouter();
  const [isOpen, toggleOpen] = useToggle(false);
  const [inProgress, sellNft] = useTrackAsyncFun(async () => {
    const result = await props.buy();
    const data = result?.buySale;
    if(data == 'Sold') {
      await replace(`/nft/${props.nftId}`);
      toggleOpen(false);
      return;
    }
  });
  const total = props.price;

  return (
    <>
      <Button
        onClick={toggleOpen}
        icon={props.buttonIcon}
        block
        type='primary'
        size='large'
        disabled={!!props.disabledButton}
        className={styles.buyButton}>
        {props.buttonText}
      </Button>
      <Modal
        title='Confirmation'
        visible={isOpen}
        cancelText='Cancel'
        cancelButtonProps={
          inProgress ? { className: helperStyles.disabled, disabled: true } : undefined
        }
        okText={props.submitButtonText}
        okButtonProps={{ disabled: !props.price }}
        onOk={sellNft}
        onCancel={toggleOpen}
        confirmLoading={inProgress}>
        {props.children}
        <Row className={inProgress ? helperStyles.disabled : ''}>
          <Col span={24}>
            <Title level={5}>Total</Title>
          </Col>
          <Col span={16}>
            <Text>Nft price</Text>
          </Col>
          <Col span={8} className={helperStyles.textRight}>
            <Text>{props.price} ZTI</Text>
          </Col>
          <Col span={16}>
            <Text strong>Total</Text>
          </Col>
          <Col span={8} className={helperStyles.textRight}>
            <Text strong>{total} ZTI</Text>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
