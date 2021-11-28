import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi'
import ItemProduct from '../../ListProduct/Components/ItemProduct'
const ListSale = () => {
    const [productSale, setProductSale] = useState([])
    useEffect(() => {
       const fetchProductSale = async () => {
           const res = await prouctApi.GetProductsSale()
           setProductSale(res)
       }
       fetchProductSale()
    }, [])
    console.log(productSale);
    return (
        <div className="List-product">
            <ItemProduct data={productSale.data}/>
    
        </div>
    )
}

export default ListSale
