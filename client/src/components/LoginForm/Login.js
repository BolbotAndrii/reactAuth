import React from 'react'
import { Button, Form, Input } from 'antd'
import {loginUser} from "../../utils/api"




const login = () => {
    loginUser().then( (data) => {
        console.log(data)

    }).catch ( (e) => {
        console.error(e.message)
    })
}

const Login = () => {
    const onFinish = (values) => {
        loginUser(values).then( (response) => {
            console.log(response)

        }).catch ( (e) => {
            console.error(e.message)
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            id='login-form'
            autoComplete="off"
            className='w-80 rounded p-8 bg-zinc-900 shadow'
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onSubmit={() => login()}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;