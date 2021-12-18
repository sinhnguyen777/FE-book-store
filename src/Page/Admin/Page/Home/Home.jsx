import { Card, Col, Row } from "antd";
import React , { useEffect, useState }from "react";
import statisticalApi from "../../../../api/statistical";
import BoxChart from "./Components/chart";


const Home = () => {
    const [CountOrder, setCountOrder] = useState(0)
    const [CountOrderWait, setCountOrderWait] = useState(0)
    const [CountOrderDone, setCountOrderDone] = useState(0)
    const [TotalOrderDone, setTotalOrderDone] = useState(0)

    useEffect(() => {
        const fetchGetAllOrder = async () =>{
            const res = await statisticalApi.GetAllOrder();
            setCountOrder(res.data)
        }

        fetchGetAllOrder()

        const fetchGetAllOrderWait = async () =>{
            const res = await statisticalApi.GetAllOrderWaiting();
            setCountOrderWait(res.data)
        }

        fetchGetAllOrderWait()

        const fetchGetAllOrderDone = async () =>{
            const res = await statisticalApi.GetAllOrderDone();
            setCountOrderDone(res.data)
        }

        fetchGetAllOrderDone()

        const fetchGetTotalOrderDone = async () =>{
            const res = await statisticalApi.GetTotal();
            setTotalOrderDone(res.data)
        }

        fetchGetTotalOrderDone()
    }, [])
console.log(TotalOrderDone);
    return (
        <div className="Home">
            <Row  gutter={[16, 24]}>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Tổng đơn hàng" bordered={false} >
                        <p style={{fontSize:20}}>{CountOrder}</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Đơn hàng đang chờ xử lý" bordered={false} >
                        <p style={{fontSize:20}}>{CountOrderWait}</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Đơn hàng đã giao" bordered={false}>
                        <p style={{fontSize:20}}>{CountOrderDone}</p>
                    </Card>
                </Col>
                <Col span={6} xl={6} md={12} sm={24} xs={24}>
                    <Card title="Tổng Doanh thu " bordered={false}>
                        <p style={{fontSize:20}}>{TotalOrderDone[0].totalAmount}</p>
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