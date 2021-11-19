import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGoHome } from '../../Components/Common/Button/Button'
// import img from '../../../../Assets/Images/summer-3.png'

const Error = () => {
    return (
        <div className="error">
            <div className="error-container">
                <h2>Opps! Page not found</h2>
                <h1>404</h1>
                <p>We can't the page you are looking for.</p>
                <Link to='/'><ButtonGoHome/></Link>
            </div>
        </div>
    )
}

export default Error
