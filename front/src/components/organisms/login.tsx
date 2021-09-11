import { Form, Input, Button, Checkbox, notification } from 'antd';
import {login} from "../../utils/request";
import {useRouter} from "next/router";


export interface LoginForm {
    username: string;
    password: string;
}

export const Login = () => {
    const router = useRouter();
    const onFinish = ({username, password}:LoginForm) => {
        login({username, password}).then(
            response => {
                localStorage.setItem('accessToken', response.accessToken)}
        ).then(() => {
            router.push('/');
        }).catch(error => {
            if(error.status === 401) {
                notification.error({
                    message: 'Polling App',
                    description: 'Your Username or Password is incorrect. Please try again!'
                });
            } else {
                notification.error({
                    message: 'Polling App',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
            }
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm<LoginForm>();

    return (
        <Form
            form={form}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                validateFirst
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                validateFirst
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
