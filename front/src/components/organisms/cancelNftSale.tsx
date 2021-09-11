import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useTrackAsyncFun } from 'hooks/trackAsync';
import { useCancelSaleMutation } from 'generated/graphql';
import { useRouter } from 'next/router';
import helperStyles from 'utils/helperStyles';
import { SalesTypes } from 'models/salesTypes';

export interface CancelNftSaleProps {
  saleId: string;
  saleType: SalesTypes;
  nftId: string;
}

export const CancelNftSale: React.FC<CancelNftSaleProps> = props => {
  const { replace } = useRouter();
  const [cancel] = useCancelSaleMutation();
  const [inProgress, cancelSale] = useTrackAsyncFun(async () => {
    const result = await cancel({
      variables: {
        saleId: props.saleId,
      },
    });
    switch (result.data?.cancelSale) {
      case 'Success':
        await replace(`/nft/${props.nftId}`);
        return;
      case 'NotFound':
        Modal.error({ title: 'Sale not found' });
        return;
      case 'CannotCancel':
        Modal.error({ title: "Sale can't be cancelled" });
        return;
    }
  });

  const confirm = () => {
    Modal.confirm({
      title: 'Confirmation',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to cancel the sale?',
      okText: 'Cancel sale',
      cancelText: 'Abort',
      onOk: cancelSale,
      cancelButtonProps: inProgress
        ? { className: helperStyles.disabled, disabled: true }
        : undefined,
    });
  };
  return (
    <Button onClick={confirm} type='default' size='large' block danger>
      Cancel
    </Button>
  );
};
