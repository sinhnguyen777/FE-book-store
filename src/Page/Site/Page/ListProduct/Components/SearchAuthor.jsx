import React, { useEffect, useState } from 'react'
import { Pagination, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ItemProduct from './ItemProduct';
import prouctApi from '../../../../../api/productApi';
import { useRouteMatch } from 'react-router-dom';

const { Option } = Select;
function handleChange(value) {
    console.log(value); 
}
const SearchAuthor = () => {
    const [product, setProduct] = useState([])
    const match = useRouteMatch();
    
    useEffect(() => {
        const fetchGetValues = async (values) => {
          const res = await prouctApi.GetProductsByauthor(values);
          setProduct(res.data);
        };
    
        fetchGetValues(match.params.values);
      }, [match]);
    console.log(product);
    return (
        <div>
            <div className="List-filter SearchAuthor">
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
               <ItemProduct data={product}/>
               
            </div>
            <div className="List-pagination">
                <Pagination size="small" total={50} />
            </div>
        </div>
    )
}

export default SearchAuthor
