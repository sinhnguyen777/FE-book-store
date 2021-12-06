import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi'
import ItemProduct from '../../ListProduct/Components/ItemProduct'
const ListNew = () => {
    const [productNew, setProductNew] = useState([])
    useEffect(() => {
       const fetchProductNew = async () => {
            const res = await prouctApi.GetProducts()
            setProductNew(res.data)
       }
       fetchProductNew()
    }, [])
    console.log(productNew);
    const data = productNew.slice(0,10)
    return (
        <div className="List-product">
            <ItemProduct data={data}/>
        
        </div>
    )
}

export default ListNew
