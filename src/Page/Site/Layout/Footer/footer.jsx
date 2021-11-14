import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const footerPublishers = [
    {
        display: "Bestsellers",
        path : "/"
    },
    {
        display: "Interviews",
        path : "/"
    },
    {
        display: "Authors Story",
        path : "/"
    },
    {
        display: "Book Fairs",
        path : "/"
    },
    {
        display: "Help (FAQ)",
        path : "/"
    }
]
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_top">
                <div className="footer_top_inner">
                    <div className="footer_top_inner_content">
                        
                        <div className="footer_top_inner_content_item">
                            <div className="footer_title">Publishers</div>
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
                            <div className="footer_title">Contact</div>
                            <div className="footer_content">
                                <p className="footer_content_txt contb">
                                    Stay in touch with everything ChapterOne,
                                    follow us on social media and learn about new promotions.
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
                            <div className="footer_title">News & Update</div>
                            <div className="footer_content">
                                <p className="footer_content_txt">
                                    We’d love it if you subscribed to our newsletter!
                                     You’ll love it too.
                                </p>
                                <p className="footer_content_icons">
                                    
                                </p>
                            </div>
                        </div>
                        <div className="footer_top_inner_content_item">
                            <div className="footer_title">Social media</div>
                            <div className="footer_content">
                                <p className="footer_content_txt">
                                    
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_content">
                    <p>
                       <span>&copy; 2021, ALL RIGHTS RESERVED</span>
                       
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
