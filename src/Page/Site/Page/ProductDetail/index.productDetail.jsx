/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Layout,
    Row,
    Col,
    Image,
    
} from 'antd';
import { BannerProduct } from '../../Components/Common/Banner/banner';
import RelatedProducts from './Components/RelatedProducts';
import Comments from './Components/Comments';
import { useRouteMatch } from 'react-router';
import prouctApi from '../../../../api/productApi';

import { CheckOutlined, HeartOutlined, LoadingOutlined } from '@ant-design/icons';
import Slider from "react-slick";

export default function ProductDetail() {

    const [visible, setVisible] = useState(false);
    const [like, setLike] = useState(false);
    const handleClickLike = ()=>{
        setLike(!like);
      }
    const match =  useRouteMatch()
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const slug = match.params.slug;
        const fetchProductID = async () => {
            const res = await prouctApi.GetProductsBySlug(slug)
            setProductDetail(res.data)
        }
        fetchProductID(slug)
    }, [])
    // console.log(productDetail);

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    return (
        <div style={{ width: '100%' }}>
            <BannerProduct>
                <h6>Sách</h6>
                <h2>Chi tiết sách</h2>
            </BannerProduct>

            <Layout className="layout" >
                <Row >
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={8}
                        xl={8}
                        // span={8}
                        
                        className="layout_product_detail"
                    >
                        <div className="image_product_detail_gallery">
                        <Slider asNavFor={nav2} ref={c => setNav1(c)}>
                                 {productDetail[0] ?
                                    productDetail[0].images.map(item => (
                                        <div style={{width: '100%'}}>
                                            <Image
                                                preview={{ visible: false }}
                                                src={`https://beonlinelibrary.herokuapp.com/${item.image}`}
                                                onClick={() => setVisible(true)}
                                            />
                                            <div style={{ display: 'none' }}>
                                                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                                    <Image src={`https://beonlinelibrary.herokuapp.com/${item.image}`} />
                                                </Image.PreviewGroup>
                                            </div>
                                        </div>
                                    )) : <LoadingOutlined />
                                }
                            
                        </Slider>
                        <Slider
                           asNavFor={nav1}
                           ref={c => setNav2(c)}
                           slidesToShow={productDetail[0]?productDetail[0].images.length: <LoadingOutlined />}
                           swipeToSlide={true}
                           focusOnSelect={true}
                           arrows={false}
                           className="slider-images"
                            >
                            
                                {productDetail[0]?productDetail[0].images.map(item => (
                                        <img src={`https://beonlinelibrary.herokuapp.com/${item.image}`}/>
                                )) : <LoadingOutlined />}
                            
                            
                            
                        </Slider>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={16}
                        xl={16}
                        style={{ padding: '0 0 0 22px' }}
                    >
                        {
                            productDetail[0]? 
                            <div className="product_detail">
                                <div className="title_author">
                                    {productDetail[0].author}
                                </div>
                                <h2 className="title_product_detail">{productDetail[0].nameProduct}</h2>
                                <p className="price_product_detail">Nhà xuất bản: {productDetail[0].nxb}</p>
                                <div className="price_product_detail_sp">
                                    {productDetail[0].productHot=== true ? <p className="price_product_detail_sp_hot">hot <CheckOutlined /></p> : null}
                                    {productDetail[0].productHot=== true ? <p className="price_product_detail_sp_sale">sale <CheckOutlined /></p> : null}
                                </div>
                                <p className="price_product_detail_price">Giá: {productDetail[0].price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                                <Link to={`/read-book/${productDetail[0]._id}`}>
                                    <button  className="btn">Đọc thử</button>
                                </Link>
                                <Link to='/cart'>
                                    <button style={{marginLeft: '40px'}} className="btn ButtonBanner">Mua sách</button>
                                </Link>

                                <span className="btn-heart" style={{marginLeft: '40px'}}>
                                   {
                                       like ?
                                       <button onClick={handleClickLike} className="btn-heart_true"> <HeartOutlined/> </button>
                                       :
                                       <button onClick={handleClickLike} className="btn-heart_false"> <HeartOutlined/> </button>

                                   }
                               </span>
                                <div className="description_product_detail">
                                    <p dangerouslySetInnerHTML={{ __html: productDetail[0].description }}/>
                                </div>
                            </div> : <LoadingOutlined />
                        }
                        
                    </Col>
                </Row>
                <Row className="tabs_product_detail">
                <Comments />
                    
                </Row>
                <RelatedProducts />
            </Layout>
        </div>
    )
}

