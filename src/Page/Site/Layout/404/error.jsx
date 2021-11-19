import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGoHome } from '../../Components/Common/Button/Button'
// import img from '../../../../Assets/Images/summer-3.png'

const Error = () => {
    return (
        <div className="error">
            <div className="error-container">
                <h2>Bạn đi lạc à ?</h2>
                <h1>404</h1>
                <p>Rất tiếc, chúng tôi không tìm thấy trang đó. Bạn sẽ thấy rất nhiều thứ để khám phá trên trang chủ.</p>
                <Link to='/'><ButtonGoHome/></Link>
            </div>
        </div>
    )
}

export default Error
