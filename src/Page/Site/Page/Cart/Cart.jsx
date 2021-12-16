import { Empty, Input, Select  } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import ItemCart from './Components/ItemCart'
import { cartItemTotalSelector } from './selector'
const { Option } = Select;
function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
const Cart = () => {
    const totalCart = useSelector(cartItemTotalSelector);
    const listCart = useSelector(state => state.cart);
    console.log(listCart.cartItem);
    
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
                    {
                        listCart.cartItem.length === 0?
                            <tbody className="Emty"><Empty /></tbody>
                        :
                        listCart.cartItem.map(item=>(
                            <ItemCart item={item}></ItemCart>
                        ))
                    }
                    </tbody>
                    
                </table>
                <div className="cart-apply"  style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="cart-apply_coupon">
                        <input style={{textAlign: 'center', margin: '10px'}} type="text" name="" id="" className="ButtonPara btn" placeholder="Mã giảm giá"/>
                        <button type="submit" className="ButtonBanner btn">áp dụng mã</button>
                    </div>
                    <button style={{ margin: '10px 0'}}type="submit" className="ButtonBanner btn">Cập nhật giỏ hàng</button>
                </div>
                <div className="cart-form">
                    <div className="cart-form_shipping">
                        <h2>Thông tin</h2>
                        <form action="">
                            <div className="cart-form_box">
                                <Input type="email" placeholder="Email"/>
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Họ và tên"/>
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Số điện thoại"/>
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Địa chỉ"/>
                            </div>
                            <div className="cart-form_box">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Tỉnh thành"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="lan1">Lan1</Option>
                                    <Option value="lan2">Lan2</Option>
                                    <Option value="lan3">Lan3</Option>
                                    <Option value="lan">Vậy là có 3 con lan</Option>
                                </Select>
                            </div>
                            <div className="cart-form_box">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Quân huyện"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="lan1">Lan1</Option>
                                    <Option value="lan2">Lan2</Option>
                                    <Option value="lan3">Lan3</Option>
                                    <Option value="lan">Vậy là có 3 con lan</Option>
                                </Select>
                            </div>
                            <div className="cart-form_box">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Phường xã"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="lan1">Lan1</Option>
                                    <Option value="lan2">Lan2</Option>
                                    <Option value="lan3">Lan3</Option>
                                    <Option value="lan">Vậy là có 3 con lan</Option>
                                </Select>
                            </div>
                            <div className="cart-form_box">
                                <textarea name="" id="" placeholder="Ghi chú"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="cart-form_total">
                        <h2>Tổng đơn</h2>
                        <table className="cart-total_table">
                            <tbody>
                                <tr>
                                    <th>Tạm tính</th>
                                    <td>{totalCart.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                                </tr>
                                <tr>
                                    <th>Phí vận chuyển</th>
                                    <td>30000</td>
                                </tr>
                                <tr>
                                    <th>Tổng</th>
                                    <td>
                                        <strong>0000</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/' style={{ margin: '20px 0'}}type="submit" className="ButtonBanner btn">thanh toán</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
