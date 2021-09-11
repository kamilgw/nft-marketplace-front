import { Button, Card, Form, Input, Modal } from 'antd';
import { SessionQuery, useCreateNftMutation} from 'generated/graphql';
import React, { useCallback } from 'react';
import { validateUrl} from "../../utils/validators";

interface UserSettingsDashboardProps {
  userInfo: NonNullable<SessionQuery['session']>;
}

interface FormValues {
  name: string;
  assetUrl: string;
  description: string;
}

export const CreateNftDashboard: React.FC<UserSettingsDashboardProps> = () => {
  const [personalDetailsForm] = Form.useForm<FormValues>();
  const [mutate, { loading }] = useCreateNftMutation();
  const onUpdate = useCallback(
    ({ name, assetUrl, description }: FormValues) => {
      mutate({
        variables: { name, assetUrl, description },
      }).then(async ({ data }) => {
        if(data?.createNft){
          Modal.success({ title: 'Nft created' });
          return;
        } else {
          Modal.error({ title : 'Something went wrong' });
          return;
        }
      });
    },
    [mutate],
  );

    return (
    <Card title='Personal details'>
      <Form
        layout='vertical'
        onFinish={onUpdate}
        form={personalDetailsForm}
        name='user-details'>
        <Form.Item label='Name' name='name' rules={[
            { required: true },
            { type: 'string', min: 6 },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label='Asset URL' name='assetUrl'
                   rules={[
                     { required: true },
                       // @ts-ignore
                     { type: 'url', warningOnly: true },
                     { type: 'string', min: 6 },
                       { validator: validateUrl, message: 'Invalid URL' }
                   ]}>
          <Input.TextArea rows={1}/>
        </Form.Item>
        <Form.Item label='Description' name='description' rules={[
            { required: true },
            { type: 'string', min: 6 },
        ]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' size='large' loading={loading}>
            Create NFT
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
