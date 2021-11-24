import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const footerPublishers = [
    {
        display: "Giới thiệu chung",
        path : "/"
    },
    {
        display: "Sản phẩm",
        path : "/"
    },
    {
        display: "Tin tức",
        path : "/"
    },
    {
        display: "Liên hệ",
        path : "/"
    },
    {
        display: "Thỏa thuận dịch vụ",
        path : "/"
    }
]

const footerOrders = [
    {
        display: "Đơn hàng của tôi",
        path : "/"
    },
    {
        display: "Đơn hàng vận chuyển",
        path : "/"
    },
    {
        display: "Lịch sử hủy / Đổi / Trả hàng",
        path : "/"
    },
    {
        display: "Lịch sử đánh giá sản phẩm",
        path : "/"
    }
]
const footerAccounts = [
    {
        display: "Đăng ký tài khoản",
        path: "/"
    },
    {
        display: "Đăng nhập",
        path: "/"
    },
    {
        display: "Cấp độ thành viên",
        path: "/"
    },
    {
        display: "Phiếu mua hàng",
        path: "/"
    }
]
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_top">
                <div className="footer_top_inner">
                    <div className="footer_top_inner_content">
                    <div className="footer_top_inner_content_item">
                            <div className="footer_title">Liên hệ</div>
                            <div className="footer_content">
                                <p className="footer_content_txt contb">
                                    Giữ liên lạc với mọi thứ của ChapterOne, 
                                    theo dõi chúng tôi trên mạng xã hội và 
                                    tìm hiểu về các chương trình khuyến mãi mới.
                                </p>
                                <p className="footer_content_icons newb">
                                    <div className="footer_content_icon">
                                        <Link to=''>
                                            <TwitterOutlined />
                                        </Link>
                                    </div>
                                    <div className="footer_content_icon">
                                        <Link to=''>
                                            <GithubOutlined />
                                        </Link>
                                    </div>
                                    <div className="footer_content_icon">
                                        <Link to=''>
                                            <InstagramOutlined />
                                        </Link>
                                    </div>
                                    <div className="footer_content_icon">
                                        <Link to=''>
                                            <FacebookOutlined />
                                        </Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="footer_top_inner_content_item">
                            <div className="footer_title">Thông tin hữu ích</div>
                            <div className="footer_content">
                                {
                                    footerPublishers.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        
                        <div className="footer_top_inner_content_item">
                            <div className="footer_title">Đơn hàng</div>
                            <div className="footer_content">
                                {
                                    footerOrders.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="footer_top_inner_content_item">
                            <div className="footer_title">Tài khoản</div>
                            <div className="footer_content">
                                {
                                    footerAccounts.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_content">
                    <p>
                       <span>&copy; 2021, CHAPTERONE</span>
                       
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
