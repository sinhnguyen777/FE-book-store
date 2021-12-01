import React from 'react'

import { Link } from 'react-router-dom'

const ItemCart = (props) => {
    
    
    return (
        <>
            <tr className="cart-item">
                <td className="cart-product-remove">x</td>
                <td className="cart-product-image">
                    <Link to='/'>
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-600x829.jpg" alt="" />
                    </Link>
                </td>
                <td className="cart-product-name">
                    <Link to='/'>
                        Ho Thi lan
                    </Link>
                </td>
                <td className="cart-product-price">000</td>
                <td className="cart-product-quantity">
                    <div className="cart-product-quantity_item">
                        <div className="cart-product-quantity_item_btn">
                            -
                        </div>
                        <div className="cart-product-quantity_item_input">
                            {/* {quantity} */} 1
                        </div>
                        <div className="cart-product-quantity_item_btn">
                            +
                    </div>
                </div>
                </td>
                <td className="cart-product-total">000</td>
            </tr>
        </>
    )
}

export default ItemCart
