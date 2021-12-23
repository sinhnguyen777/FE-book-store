import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi'
import ItemProduct from '../../ListProduct/Components/ItemProduct'

const ListHot = () => {
    const [DataHot, setDataHot] = useState([]);

    useEffect(() => {
        const filter = {
            productHot:true
        }
        const fetchProductHot = async (filter) =>{

            const res = await prouctApi.GetProducts(filter);
            setDataHot(res.data);
        }

        fetchProductHot(filter)
    }, [])

    const data = DataHot.slice(0,5);
    // console.log(data);
    return (
        <div className="List-product">
            <ItemProduct data={data}/>
        
        </div>
    )
}

export default ListHot
