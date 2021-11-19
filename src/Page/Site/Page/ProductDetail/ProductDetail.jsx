import React, { useState } from 'react'
import { Layout, Row, Col, Image, Rate } from 'antd';
import { Link } from 'react-router-dom';

export default function ProductDetail() {

    const [visible, setVisible] = useState(false);

    return (
        <div style={{width: '100%'}}>
            <div className="banner_product_detail">
                <div className="title_banner_product">
                    <h6>PRODUCTS</h6>
                    <h2>Shop List</h2>
                </div>
            </div>
            <Layout className="layout" style={{ padding: '80px 80px' }}>
                <Row>
                    <Col span={8} style={{ padding: '0 22px 0 0' }}>
                        <div className="image_product_detail_gallery">
                            <Image
                                preview={{ visible: false }}

                                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4.jpg"
                                onClick={() => setVisible(true)}
                            />
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                    <Image src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4.jpg" />
                                </Image.PreviewGroup>
                            </div>

                        </div>
                    </Col>
                    <Col span={16} style={{padding: '0 0 0 22px'}}>
                        <div className="product_detail">
                            <div className="title_author">
                                <Link to="/author">BY JAMES HOFFMAN</Link>
                            </div>
                            <h2 className="title_product_detail">Amster Hamster Trip</h2>
                            <div className="rating_product_detail">
                                <Rate style={{color: '#d14031'}} disabled defaultValue={5} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

