import { LoadingOutlined } from '@ant-design/icons'
import { Col, PageHeader, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../api/productApi'
import ListProducts from './Components/ListProducts'

const ProductSelling = () => {
    const [productSelling, setproductSelling] = useState([])
    useEffect(() => {
        const fetchProductsSelling = async () => {
            const res = await prouctApi.ProductsSelling()
            setproductSelling(res.data)
        }
        fetchProductsSelling()
    }, [])
    // console.log(productSelling);
    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Sách bán chạy"
            />

            <Row className='ListCata'>
                <Col span={24}>
                <ListProducts data={productSelling}/>
                    
                </Col>
            </Row>
        </div>
    )
}

export default ProductSelling
