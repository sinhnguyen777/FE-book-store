import React from 'react'
import { Link } from 'react-router-dom'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import ItemCart from './Components/ItemCart'

const Cart = () => {
    // const updateQuantity = (opt) => {
    //     if (opt === '+') {
    //         dispatch(updateItem({...item, quantity: quantity + 1}))
    //         // setQuantity(quantity + 1)
    //     }
    //     if (opt === '-') {
    //         dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
    //         // setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
    //     }
    // }
    return (
        <div>
            <BannerProduct>
                <h2>Giỏ hàng</h2>
            </BannerProduct>
            <div className="layout">
                <table className="shop-table">
                    <thead>
                        <tr>
                            <th className="cart-product-remove"></th>
                            <th className="cart-product-image"></th>
                            <th className="cart-product-name">Sách</th>
                            <th className="cart-product-price">Giá</th>
                            <th className="cart-product-quantity">Số lượng</th>
                            <th className="cart-product-total">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemCart/>
                    </tbody>
                    
                </table>
                <button style={{ margin: '20px 0'}}type="submit" className="ButtonBanner btn">Cập nhật giỏ hàng</button>
                <div className="cart-total">
                    <h2>Tổng</h2>
                    <table className="cart-total_table">
                        <tbody>
                            <tr>
                                <th>Tổng</th>
                                <td>
                                    <p>Số sản phẩm mua: 12</p>
                                    <p>Giá: <strong>0000</strong></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to='/checkout' style={{ margin: '20px 0'}}type="submit" className="ButtonBanner btn">thanh toán</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart