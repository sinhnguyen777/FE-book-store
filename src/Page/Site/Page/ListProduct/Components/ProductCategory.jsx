import React, { useEffect, useState } from 'react'
import { Pagination, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ItemProduct from './ItemProduct';
import prouctApi from '../../../../../api/productApi';

const { Option } = Select;
function handleChange(value) {
    console.log(value); 
}
const ProductCategory = () => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await prouctApi.GetProductsByCataID()
            setProduct(res)
        }
        fetchProduct();
        
    }, [])
    console.log(product.data);
    return (
        <div>
            <div className="List-filter">
                <div className="List-filter_result">Trang 1/12 của {product.data?product.data.length:<LoadingOutlined/>} sản phẩm</div>
                <form action="" className="List-filter_sort">
                    <Select
                        labelInValue
                        defaultValue={{ value: 'new' }}
                        style={{ width: 230, height: 50 }}
                        onChange={handleChange}
                    >
                        <Option value="new">Sắp xếp theo thứ tự mới nhất</Option>
                        <Option value="pricelow">Sắp xếp theo giá: thấp đến cao</Option>
                        <Option value="pricehigh">Sắp xếp theo giá: cao đến thấp</Option>
                    </Select>
                </form>
            </div>
            <div className="List-product">
               <ItemProduct data={product.data}/>
               
            </div>
            <div className="List-pagination">
                <Pagination size="small" total={50} />
            </div>
        </div>
    )
}

export default ProductCategory
