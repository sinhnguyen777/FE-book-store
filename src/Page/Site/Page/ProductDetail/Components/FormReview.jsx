import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

export default function FormReview() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 0,
            },
            lg: {
                span: 24,
                offset: 0,
            }
        },
    };

    return (
        <Form
            name="normal_reviews"
            className="reviews-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="YourReview"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Your Review!',
                    },
                ]}
            >
                <Input.TextArea placeholder="Your Review" autoSize={{ minRows: 8, maxRows: 8 }} />
            </Form.Item>
            <Form.Item
                name="author"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Your Name Surname!',
                    },
                ]}
            >
                <Input size="large" placeholder="Name Surname" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Your Name Email!',
                    },
                ]}
            >
                <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    Save my name, email, and website in this browser for the next time I comment.
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    SUBMIT
                </Button>
            </Form.Item>
        </Form>
    )
}
