import { UpOutlined } from '@ant-design/icons'
import { BackTop } from 'antd'
import React from 'react'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import Filter from './Components/Filter'
import ListPro from './Components/ListPro'

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#d14031',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};
const ListProduct = () => {
    return (
        <div>
            <BannerProduct>
                <h6>SẢN PHẨM</h6>
                <h2>Danh sách sản phẩm</h2>
            </BannerProduct>
            <div className="layout">
                <div className="list-product">
                    <div className="list-product_list"><ListPro/></div>
                    <div className="list-product_filter"><Filter/></div>
                </div>
            </div>
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>
        </div>
    )
}

export default ListProduct
