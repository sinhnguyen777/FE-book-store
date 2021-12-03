import { LoadingOutlined, UpOutlined } from '@ant-design/icons'
import { BackTop, Pagination, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../api/productApi'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import Filter from './Components/Filter'
import ItemProduct from './Components/ItemProduct'

const { Option } = Select;

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
    const [product, setProduct] = useState([])
    const [currentPage, setCurrentpage] = useState(1)
    const [postPerPage, setpostPerPage] = useState(9)
    const [filter, setfilter] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await prouctApi.GetProducts(filter)
            setProduct(res.data)
        }
        fetchProduct();

    }, [filter])

    // values Select
    function handleChange(value) {
        console.log(value);
    }


    const total = product.length
    // Pagination
    const indexOfLast = currentPage * postPerPage;
    const idextOfFirst = indexOfLast - postPerPage;
    const currentProduct = product.slice(idextOfFirst, indexOfLast)

    const handleChangePage = (page) => {
        setCurrentpage(page);
    }


    // fillter Cata

    const handleListCata = (values) => {
        console.log(values);
        const newData = {
            ...filter,
            idCatalog: values
        }
        console.log(newData);
        setfilter(newData)
    }
    return (
        <div>
            <BannerProduct>
                <h6>SẢN PHẨM</h6>
                <h2>Danh sách sản phẩm</h2>
            </BannerProduct>
            <div className="layout">
                <div className="list-product">
                    <div className="list-product_list">
                        <div className="List-filter">
                            <div className="List-filter_result">Trang 1/12 của {product ? product.length : <LoadingOutlined />} sản phẩm</div>
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
                            <ItemProduct data={currentProduct} />
                        </div>
                        <div className="List-pagination">
                            <Pagination size="small" onChange={handleChangePage} pageSize={9} total={total} />
                        </div>
                    </div>
                    <div className="list-product_filter">
                        <Filter filter={filter} handleListCata={handleListCata} />
                    </div>
                </div>
            </div>
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>
        </div>
    )
}

export default ListProduct
