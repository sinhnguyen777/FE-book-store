import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCart, ButtonCheckout } from '../../Components/Common/Button/Button'
import { CloseCircleOutlined } from '@ant-design/icons';

const CartHeader = () => {
    
    return (
        <>
            <div className="CartHeaderItem">
                <div className="CartHeaderItem_image">
                    <Link to='/'>
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-3-600x829.jpg" alt="" />
                    </Link>
                </div>
                <div className="CartHeaderItem_content">
                    <h6 className="CartHeaderItem_content_title">
                        <Link to='/'>đắc nhân tâm</Link>
                    </h6>
                    <p className="CartHeaderItem_content_price">
                        1 x 
                        <span className="CartHeaderItem_content_amount">1.000 VNĐ</span>
                    </p>
                    <p className="CartHeaderItem_content_remove">
                        <Link>
                            <CloseCircleOutlined />
                        </Link>
                    </p>
                </div>
            </div>
            
            <div className="CartHeaderItem_bton">
                <p><ButtonCart/></p>
                <p><ButtonCheckout/></p>
            </div>
            
        </>
    )
}

export default CartHeader
