import { CaretDownOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'

const OrderDetail = () => {
    const showPro = useRef(null)
    const productToggle = () => showPro.current.classList.toggle('show')
    return (
        <>
            <div className="orderdetail_banner">
                <div className="orderdetail_banner_title">
                    <h6>Thông tin</h6>
                    <h2>Chi tiết đơn hàng</h2>
                </div>
            </div>
            <div className="layout">
                <div className="orderdetail-content">
                    <h2>Thông tin đơn hàng</h2>
                    <div className="orderdetail-content_title">
                        Khách hàng: User Name
                    </div>
                    <div className="orderdetail-content_phone">
                        Số điện thoại: 0123456789
                    </div>
                    <div className="orderdetail-content_address">
                        Địa chỉ: ấp Cây Me xã Cây Chuối huyện Cai Lậy Tỉnh Sầu Riêng
                    </div>
                    <div className="orderdetail-content_price">
                        Giá : 0000000
                    </div>
                    <div className="orderdetail-content_price">
                       Trạng thái đơn hàng: đang giao
                    </div>
                    <div className="orderdetail-content_product">
                        <h3 onClick={productToggle}>Sản phẩm <CaretDownOutlined /></h3>
                        <div ref={showPro} className="orderdetail-content_product_list">
                           <table className="orderdetail-content_product_list_table">
                                <tbody>
                                    <tr>
                                        <th> <img src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg" alt="" /> </th>
                                        <td>
                                            :) :) :)
                                        </td>
                                        <td>
                                            000 đ
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th> <img src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg" alt="" /> </th>
                                        <td>
                                            :) :) :)
                                        </td>
                                        <td>
                                            000 đ
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        
                                    </tr>
                                </tbody>
                           </table>
                           <div className="orderdetail-content_product_list_total">
                                Tổng: 0000
                           </div>
                        </div>
                        <button type='error' className="btn ButtonBanner">Hủy</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default OrderDetail
