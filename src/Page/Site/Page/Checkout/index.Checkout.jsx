import React from 'react'
import {
    Form,
    Input,
    Row,
    Col,
    Button,
    Divider,
    Layout,
    Table, 
} from 'antd';
import { BannerProduct } from '../../Components/Common/Banner/banner';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */
export default function Checkout() {
    const onFinish = (values) => {
        console.log(values);
    };

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href>{text}</a>,
        },
        {
            title: 'Toàn bộ',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Chuyến đi của Hamster Amster  × 1',
            age: '$ 69,00',
        },
        {
            key: '2',
            name: 'Mẹo tạo mẫu và trang điểm thô - Bìa mềm  × 1',
            age: '$ 19,00',
        },
        {
            key: '3',
            name: 'Tổng phụ',
            age: '$ 88,00',
        },
        {
            key: '4',
            name: 'Đang chuyển hàng',
            age: 'Tỷ giá cố định: $ 79,00',
        },
        {
            key: '5',
            name: 'Toàn bộ	',
            age: '	$ 167,00',
        },
    ];
    return (
        <div>
            <BannerProduct>
                <h2>Thủ tục thanh toán</h2>
            </BannerProduct>
            <Layout className="layout" >
                <div className="woocommerce">
                    <p>Mã giảm giá</p>
                    <p>Bấm vào đây để nhập mã của bạn</p>
                </div>
                <Row className="form_checkout">
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                    >
                        <h3>Chi tiết thanh toán</h3>
                        <Form size="large" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Tên"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Tên" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Họ"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Họ" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Tên công ty  (tùy chọn)"
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                ]}
                            >
                                <Input placeholder="Tên công ty  (tùy chọn)" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Quốc gia"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Quốc gia" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Mã bưu điện / ZIP (tùy chọn) "
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                ]}
                            >
                                <Input placeholder="Mã bưu điện / ZIP (tùy chọn)" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Thị trấn / Thành phố"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Thị trấn / Thành phố" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'name']}
                                // label="Điện thoại"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Điện thoại" />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'email']}
                                // label="Email"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item >
                                <h3>Đơn đặt hàng của bạn</h3>
                                <Col span={24}>
                                    <Table pagination={false} columns={columns} dataSource={data} />
                                    <p style={{ paddingTop: '30px' }}>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và cho các mục đích khác được mô tả trong chính sách bảo mật của chúng tôi .</p>
                                    <Divider />
                                </Col>
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Đặt hàng
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
