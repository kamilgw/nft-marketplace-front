import { Divider, Form, Input, Modal, Typography } from 'antd';
import React from 'react';
import helperStyles from 'utils/helperStyles';
import { useTrackAsyncFun } from 'hooks/trackAsync';
import { useRouter } from 'next/router';
import { useCreateFlatRateSaleMutation } from 'generated/graphql';
import { BuyerPriceInfo } from './buyerPriceInfo';
import {validatePositiveDecimal} from 'utils/validators';
import { SellFooter } from './sellFooter';

const { Text } = Typography;

export interface FlatRateSellProps {
  nftId: string;
  toggleOpen: (nextValue?: any) => void;
}

interface FlatSaleForm {
  price: number;
}

export const FlatRateSell: React.FC<FlatRateSellProps> = ({ nftId, toggleOpen }) => {
  const { replace, reload } = useRouter();
  const [form] = Form.useForm<FlatSaleForm>();

  const [sell] = useCreateFlatRateSaleMutation();
  const [inProgress, submitForm] = useTrackAsyncFun(async ({ price }: FlatSaleForm) => {
    const result = await sell({
      variables: {
        nftId,
        amount: price,
      },
    });

    if (result.data?.createFlatSale) {
        await replace(window.location.pathname);
        toggleOpen(false);
        reload();
        return;
    }
    else if(result.errors){
        Modal.error({ title: 'Invalid price' });
        return;
    }
  });

  return (
    <Form
      className={inProgress ? helperStyles.disabled : undefined}
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      layout='vertical'
      onFinish={submitForm}>
      <Text>Sell at a fixed price.</Text>
      <Divider />

      <Form.Item
        label='Price'
        name='price'
        hasFeedback
        validateFirst
        rules={[{ required: true }, { validator: validatePositiveDecimal, message: 'Invalid price' }]}>
        <Input suffix='ZTI' />
      </Form.Item>

      <Divider />

      <Form.Item
        labelAlign='left'
        noStyle
        label='NFT price'
        shouldUpdate={(prevValues, curValues) => prevValues.price !== curValues.price}>
        {({ getFieldValue }) => <BuyerPriceInfo price={getFieldValue('price')} />}
      </Form.Item>

      <Divider />

      <SellFooter loading={inProgress} closeModal={toggleOpen} />
    </Form>
  );
};
