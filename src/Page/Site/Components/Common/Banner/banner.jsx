import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ButtonBanner } from '../Button/Button';
import imgbn1 from '../../../../../Assets/Images/Banner/slide-banner-1.jpg'
import imgbn2 from '../../../../../Assets/Images/Banner/slide-banner-2.png'
import imgbn2_1 from '../../../../../Assets/Images/Banner/slide-banner-2_1.png'
import imgbn2_2 from '../../../../../Assets/Images/Banner/slide-banner-2_2.png'
import Aos from'aos'
import "aos/dist/aos.css"
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    useEffect(()=>{
        Aos.init({duration:2000 })
        
    })
    return (
        <div className="banner">
            <Slider {...settings}>
                <div>
                    <div className="banner_item three" >
                        <img className="three_pic" src={imgbn2} alt="" />
                        <img className="three_pic1" src={imgbn2_1} alt="" />
                        <img className="three_pic2" src={imgbn2_2} alt="" />
                        <div className="banner_item_txt three_txt">
                            <p className="banner_item_txt_chapterone three_txt_chapterone">Chương</p>
                            <p className="banner_item_txt_main three_txt_main">Chúng tôi yêu văn học</p>

                            <p className="banner_item_txt_decs three_txt_decs">
                                Tôi rất hạnh phúc
                                giảm giá nâng cao
                                nhưng lần nào tôi cũng đưa ra mức thấp nhất
                                chẳng hạn như khó khăn và đau đớn lớn
                            </p>
                            <p className="banner_item_txt_read three_txt_read">
                                <Link to='/'>
                                    <ButtonBanner/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner_item true">
                        <img className="true_pic" src={imgbn1} alt="" />
                        <div className="banner_item_txt true_txt">
                            <p className="banner_item_txt_chapterone true_txt_chapterone">Chương</p>
                            <p className="banner_item_txt_main true_txt_main">
                                Những tác phẩm kinh điển
                            </p>
                            <p className="banner_item_txt_decs true_txt_decs">
                                Tôi rất hạnh phúc
                                giảm giá nâng cao
                                nhưng lần nào tôi cũng đưa ra mức thấp nhất
                                chẳng hạn như khó khăn và đau đớn lớn
                            </p>
                            <p className="banner_item_txt_read true_txt_read">
                                <Link to='/'>
                                    <ButtonBanner/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner_item one">
                        <div className="banner_item_txt one_txt">
                            <p className="banner_item_txt_chapterone one_txt_chapterone">Chương</p>
                            <p  className="banner_item_txt_main one_txt_main">Thế giới ngôn từ của bạn</p>
                            <p className="banner_item_txt_decs one_txt_decs">
                                Tôi rất hạnh phúc
                                giảm giá nâng cao
                                nhưng lần nào tôi cũng đưa ra mức thấp nhất
                                chẳng hạn như khó khăn và đau đớn lớn
                            </p>
                            <p className="banner_item_txt_read one_txt_read">
                                <Link to='/'>
                                    <ButtonBanner/>
                                </Link>
                            </p>
                        </div>
                        <div className="banner_item_icon"></div>
                    </div>
                </div>
                
            </Slider>
            
        </div>
    )
}

export const BannerProduct = (props) => {
    return (
    <div className="banner_product_detail">
        <div className="title_banner_product">
           {props.children}
        </div>
    </div>
    )
}

export default Banner
