/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Select } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import ItemCart from './Components/ItemCart'
const { Option } = Select;



function onChange(value) {
    console.log(`selected ${value}`);
}
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
    const [GetTinh, setGetTinh] = useState()
    const [GetQuan, setGetQuan] = useState()
    const [GetXa, setGetXa] = useState()
    const [ValueQuan, setValueQuan] = useState()
    const [ValueXa, setValueXa] = useState()
    const [PriceShip, setPriceShip] = useState(0)

    useEffect(() => {

        fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
            method: 'GET', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "token": "35fd8432-5c92-11ec-bde8-6690e1946f41"
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGetTinh(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    useEffect(() => {
        const data = {
            from_district_id: 1454,
            service_id: 53321,
            to_district_id: ValueQuan,
            to_ward_code: ValueXa,
            height: 50,
            length: 20,
            weight: 200,
            width: 20,
            insurance_value: 1000000
        }

        console.log(data);
       if(ValueXa){
        fetch('https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee', {
            method: 'POST', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "token": "35fd8432-5c92-11ec-bde8-6690e1946f41"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPriceShip(data.data.total)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
       }
    }, [ValueXa])

    const handleGetQuan = (values) => {
        const data = {
            province_id: Number(values)
        }
        fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', {
            method: 'POST', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "token": "35fd8432-5c92-11ec-bde8-6690e1946f41"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGetQuan(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleGetXa = (values) => {
        const data = {
            district_id: Number(values)
        }
        console.log(data.district_id);

        setValueQuan(data.district_id)
        fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?${data.district_id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "token": "35fd8432-5c92-11ec-bde8-6690e1946f41"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGetXa(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleGetPhuong = (values) => {
        setValueXa(values)
    }

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
                        <ItemCart />
                    </tbody>

                </table>
                <div className="cart-apply" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="cart-apply_coupon">
                        <input style={{ textAlign: 'center', margin: '10px' }} type="text" name="" id="" className="ButtonPara btn" placeholder="Mã giảm giá" />
                        <button type="submit" className="ButtonBanner btn">áp dụng mã</button>
                    </div>
                    <button style={{ margin: '10px 0' }} type="submit" className="ButtonBanner btn">Cập nhật giỏ hàng</button>
                </div>
                <div className="cart-form">
                    <div className="cart-form_shipping">
                        <h2>Thông tin</h2>
                        <form action="">
                            <div className="cart-form_box">
                                <Input type="email" placeholder="Email" />
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Họ và tên" />
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Số điện thoại" />
                            </div>
                            <div className="cart-form_box">
                                <Input type="text" placeholder="Địa chỉ" />
                            </div>
                            <div className="cart-form_box">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Tỉnh thành"
                                    optionFilterProp="children"
                                    onChange={handleGetQuan}
                                >{
                                        GetTinh &&

                                        GetTinh.map(item => (
                                            <Option key={item.ProvinceID} value={item.ProvinceID}>{item.ProvinceName}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className="cart-form_box">
                                {
                                    GetQuan
                                        ?
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Quân huyện"
                                            optionFilterProp="children"
                                            onChange={handleGetXa}
                                        >
                                            {GetQuan.map(item => (
                                                <Option key={item.DistrictID} value={item.DistrictID}>{item.DistrictName}</Option>

                                            ))}
                                        </Select>
                                        :
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Quân huyện"
                                            optionFilterProp="children"
                                            disabled
                                        />
                                }

                            </div>
                            <div className="cart-form_box">
                                {
                                    GetXa
                                        ?
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Phường xã"
                                            optionFilterProp="children"
                                            onChange={handleGetPhuong}
                                        >
                                            {GetXa.map(item => (
                                                <Option key={item.WardCode} value={item.WardCode}>{item.WardName}</Option>

                                            ))}
                                        </Select>
                                        :
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Phường xã"
                                            optionFilterProp="children"
                                            disabled
                                        />
                                }
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
                                    <td>5000</td>
                                </tr>
                                <tr>
                                    <th>Phí vận chuyển</th>
                                    <td>{PriceShip}</td>
                                </tr>
                                <tr>
                                    <th>Tổng</th>
                                    <td>
                                        <strong>50000</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/' style={{ margin: '20px 0' }} type="submit" className="ButtonBanner btn">thanh toán</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
