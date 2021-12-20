import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi';

const Item = ({id}) => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
      const fetchProduct = async () => {
        const res = prouctApi.GetProductsById(id);
        setproduct(res.data);
      };
      fetchProduct();
    }, []);
    console.log(product);
    return (
        <div>
            
        </div>
    )
}

export default Item
