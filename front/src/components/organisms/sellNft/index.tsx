import { Button, Col, Modal, Radio, RadioChangeEvent, Row } from 'antd';
import React, { useState } from 'react';
import { useToggle } from 'react-use';
import { FlatRateSell } from './flatRateSell';

export interface SellNftProps {
  nftId: string;
  disableButton: boolean;
}

export const SellNft: React.FC<SellNftProps> = ({ nftId, disableButton }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [sellMethod, setSellMethod] = useState('flatRate');

  const onMethodChange = (e: RadioChangeEvent) => {
    setSellMethod(e.target.value);
  };

  return (
    <>
      <Button onClick={toggleOpen} type='primary' size='large' disabled={disableButton} block>
        SELL
      </Button>
      <Modal title='Select your sell method' visible={isOpen} onCancel={toggleOpen} footer={null}>
        <Row>
          <Col span={24}>
            <Radio.Group onChange={onMethodChange} defaultValue='flatRate' size='middle'>
              <Radio.Button value='flatRate'>Fixed Price</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        {sellMethod === 'flatRate' && <FlatRateSell nftId={nftId} toggleOpen={toggleOpen} />}
      </Modal>
    </>
  );
};
