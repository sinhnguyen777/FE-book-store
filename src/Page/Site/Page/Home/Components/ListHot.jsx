import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi'
import ItemProduct from '../../ListProduct/Components/ItemProduct'

const ListHot = () => {
    // const [productHot, setProductHot] = useState([])
    // useEffect(() => {
    //    const fetchProductHot = async () => {
    //        const res = await prouctApi.GetProductsNew()
    //        setProductHot(res)
    //    }
    //    fetchProductHot()
    // }, [])
    // console.log(productHot);
    return (
        <div className="List-product">
            {/* <ItemProduct data={product.data}/> */}
        
        </div>
    )
}

export default ListHot
