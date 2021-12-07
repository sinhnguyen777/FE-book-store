import React from 'react'
import ItemOption from './Components/ItemOption'

const Option = () => {
    return (
        <>
            <div className="option_banner">
                <div className="option_banner_title">
                    <h6>info</h6>
                    <h2>Dịch vụ</h2>
                </div>
            </div>
            <div className="layout">
                <div className="Option-text">
                    <h4>Tùy chọn giá cả</h4>
                    <h2>Sách trực tuyến mới nhất</h2>
                </div>
                <div className="Option-content">
                    <ItemOption/>
                </div>
            </div>
        </>
    )
}

export default Option
