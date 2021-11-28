import React from 'react'
import ab1 from '../../../../../Assets/Images/About/ab1.png'
import ab2 from '../../../../../Assets/Images/About/ab2.png'
import ab3 from '../../../../../Assets/Images/About/ab3.png'
const about = [
    {
        img : ab1,
        icon : "❦",
        name : "Kinh doanh nội dung số",
        description : "Đọc sách online mọi lúc, mọi nơi, trên mọi thiết bị"
    },
    {
        img : ab2,
        icon : "❦",
        name : "Cung cấp, vận hàng dịch vụ trực tuyến",
        description : "Cung cấp, đề xuất giải pháp nền tảng xuất bản điện tử, nền tảng dịch vụ trực tuyến..."
    },
    {
        img : ab3,
        icon : "❦",
        name : "Thương mại điện tử",
        description : "Sàn thương mại điện tử bán sách giấy, sách điện tử,...đa dạng trên thị trường"
    },
]
const ItemAbout = () => {
    return (
        <>
        {
            about.map((item) => (
                <div className="ItemAbout">
                    <div className="ItemAbout_images">
                        <div className="ItemAbout_image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="ItemAbout_info">
                            <div className="ItemAbout_info_icon">{item.icon}</div>
                            <div className="ItemAbout_info_name">{item.name}</div>
                            <div className="ItemAbout_info_text">{item.description}</div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default ItemAbout
