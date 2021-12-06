import { Card, Col, Row } from "antd";
import React from "react";
import BoxChart from "./Components/chart";


const Home = () => {

    return (
        <div className="Home">
            <Row  gutter={[16, 24]}>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Tổng đơn hàng" bordered={false} >
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Đơn hàng đang chờ xử lý" bordered={false} >
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Đơn hàng đang giao" bordered={false}>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Doanh thu hôm nay" bordered={false}>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <BoxChart/>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    
                </Col>
            </Row>
        </div>
    );
}

export default Home