import React, { useState } from 'react'
import { Layout, Row, Col, Image, Rate } from 'antd';
import { Link } from 'react-router-dom';

export default function ProductDetail() {

    const [visible, setVisible] = useState(false);

    return (
        <div style={{ width: '100%' }}>
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
                    <Col span={16} style={{ padding: '0 0 0 22px' }}>
                        <div className="product_detail">
                            <div className="title_author">
                                <Link to="/author">by james hoffman</Link>
                            </div>
                            <h2 className="title_product_detail">Amster Hamster Trip</h2>
                            <div className="rating_product_detail">
                                <Rate style={{ color: '#d14031' }} disabled defaultValue={5} />
                            </div>
                            <p className="price_product_detail">$38.00</p>
                            <div className="description_product_detail">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Simul vidisse eu vim. Probo tincidunt ne vel.
                                </p>
                            </div>
                            <p className="out_of_stock">Out of stock</p>
                            <div className="product_meta">
                                <span>SKU: $39</span>
                                <p>
                                    <span>
                                        Categories:
                                        <Link to=""> Art</Link>
                                        ,
                                        <Link to=""> Best Sellers</Link>
                                        ,
                                        <Link to=""> History</Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        Tags:
                                        <Link to=""> Bestseller</Link>
                                        ,
                                        <Link to=""> Fiction</Link>
                                    </span>
                                </p>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

