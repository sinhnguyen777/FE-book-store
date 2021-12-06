import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi'
import ItemProduct from '../../ListProduct/Components/ItemProduct'
const ListNew = () => {
    const [productNew, setProductNew] = useState([])
    useEffect(() => {
       const fetchProductNew = async () => {
            const res = await prouctApi.GetProducts()
            setProductNew(res)
       }
       fetchProductNew()
    }, [])
    console.log(productNew);
    return (
        <div className="List-product">
            <ItemProduct data={productNew.data}/>
        
        </div>
    )
}

export default ListNew
