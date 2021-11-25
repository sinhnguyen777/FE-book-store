import React from 'react'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import Filter from './Components/Filter'
import ListPro from './Components/ListPro'

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
        </div>
    )
}

export default ListProduct
