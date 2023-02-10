import React from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import Banner from '../../Components/Common/Banner/banner';
import Tab from '../../Components/Common/Tabs/tabs';
import imgprl from '../../../../Assets/Images/Home/home-2-parallax-image-1.jpg';
import ButtonMain, { ButtonPara } from '../../Components/Common/Button/Button';

import author1 from '../../../../Assets/Images/Home/3309.jpg';
import author2 from '../../../../Assets/Images/Home/5208.jpg';
import author3 from '../../../../Assets/Images/Home/mga.jpg';
import author4 from '../../../../Assets/Images/Home/lee2.jpg';


import month2 from '../../../../Assets/Images/Home/3309.jpg';
import month1 from '../../../../Assets/Images/Home/home-2-rev-2-img-2.jpg';
import month5 from '../../../../Assets/Images/Home/home-2-rev-2-img-5.png';
import month3 from '../../../../Assets/Images/Home/home-2-rev-2-img-6.png';
import month4 from '../../../../Assets/Images/Home/home-2-rev-2-img-7.png';

import year4 from '../../../../Assets/Images/Home/home-2-rev-3-image-1.png';
import year5 from '../../../../Assets/Images/Home/home-2-rev-3-image-2.png';
import year3 from '../../../../Assets/Images/Home/home-2-rev-3-image-4.png';
import year1 from '../../../../Assets/Images/Home/home-2-rev-3-img-6.jpg';
import year2 from '../../../../Assets/Images/Home/mga.jpg';

import dt1 from '../../../../Assets/Images/Home/dt-5.jpg';
import dt2 from '../../../../Assets/Images/Home/dt-6.jpg';
import dt3 from '../../../../Assets/Images/Home/dt-9.jpg';
import dt4 from '../../../../Assets/Images/Home/dt-10.jpg';
import dt5 from '../../../../Assets/Images/Home/dt-11.jpg';
import dt6 from '../../../../Assets/Images/Home/dt-19.jpg';


const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#d14031',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

const author = [
    {
        author: 'author',
        name: 'Dale Carnegie',
        img: author1,
        description: 'Dale Breckenridge Carnegie (24 tháng 11 năm 1888 – 1 tháng 11 năm 1955)'
    },
    {
        author: 'author',
        name: 'Richard Adams',
        img: author2,
        description: 'Richard George Adams (9 tháng 5 năm 1920 - 24 tháng 12 năm 2016)'
    },
    {
        author: 'author',
        name: 'Margaret Atwood',
        img: author3,
        description: 'Margaret Eleanor Atwood (sinh ngày 18 tháng 11 năm 1939)'
    },
    {
        author: 'author',
        name: 'Harper Lee',
        img: author4,
        description: 'Nelle Harper Lee (28 tháng 4 năm 1926 – 19 tháng 2 năm 2016)'
    }
];

const Home = () => {
    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        color: 'white',
        backgroundColor: `rgba(0, 0, 0, ${"0.5" == null && '0'})`,
        WebkitFilter: 'blur(0px) saturate(2)'
    };
    return (
        <>
            <div className="home">
                <div className="home_content">
                    <div className="home_content_banner">
                        <Banner />
                    </div>
                    <div className="home_content_categories">
                        <div className="home_content_categories_list">
                            <Tab />
                        </div>
                    </div>
                    <div className="home_content_parallax">
                        <ParallaxProvider>
                            <ParallaxBanner
                                layers={[{ image: imgprl, amount: 0.6 }]}
                                style={{ height: "550px" }}
                            >
                                <div style={contentStyle}>
                                    <div className="home_content_parallax_inner">
                                        <p className="home_content_parallax_icon">❦</p>
                                        <p className="home_content_parallax_txt">
                                            Dịch vụ của chúng tôi
                                        </p>
                                        <p className="home_content_parallax_main">
                                            Cung cấp các dịch vụ đọc sách điện tử,
                                            truyện tranh online mọi lúc mọi nơi
                                            trên nhiều thiết bị.
                                        </p>
                                        <p className="home_content_parallax_read">
                                            <Link to='/shop'><ButtonPara /></Link>
                                        </p>
                                    </div>
                                </div>
                            </ParallaxBanner>
                        </ParallaxProvider>
                    </div>
                    <div className="home_content_author">
                        <section className="section-home">
                            <div className="home_content_author_inner">
                                <div className="home_content_author_inner_subtitle">dịch vụ của chúng tôi</div>
                                <div className="home_content_author_inner_title">Tác giả nổi bật</div>
                                <div className="home_content_author_inner_text">
                                    Xây dựng thành công từ thất bại.Sự chán nản và thất bại là
                                    hai bước đệm chắc chắn nhất dẫn tới thành công - Dale Carnegie.
                                </div>
                            </div>
                            <div className="home_content_author_lists">
                                <div className="home_content_author_list">

                                    {
                                        author.map((item, index) => (
                                            <div className="home_content_author_list_item" key={index}>
                                                <div className="home_content_author_list_item_images">
                                                    <div className="home_content_author_list_item_image">
                                                        <img src={item.img} alt="" />
                                                        <div className="fancy"></div>
                                                    </div>
                                                    <div className="home_content_author_list_item_info">
                                                        <div className="home_content_author_list_item_info_posi">{item.author}</div>
                                                        <div className="home_content_author_list_item_info_name">{item.name}</div>
                                                        <div className="home_content_author_list_item_info_text">{item.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="home_content_autobiographys">
                        <div className="AutobiographyItemMonth">
                            <div className="AutobiographyItemMonth_text">
                                <div className="AutobiographyItemMonth_text_subtitle">sách</div>
                                <div className="AutobiographyItemMonth_text_title">Đắc nhân tâm</div>
                                <div className="AutobiographyItemMonth_text_content">
                                    Đắc Nhân Tâm là cuốn sách đưa ra các lời khuyên về cách thức cư xử,
                                    ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống
                                    .Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn
                                    để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,...
                                </div>
                                <div className="AutobiographyItemMonth_text_read">
                                    <Link to="/product-detail/dac-nhan-tam">
                                        <ButtonMain />
                                    </Link>
                                </div>
                            </div>
                            <div className="fancy1"></div>
                            <img data-aos="fade-down-right" className="pic1" src={month1} alt="" />
                            <img data-aos="fade-up-left" className="pic2" src={month2} alt="" />
                            <img className="pic3" src={month3} alt="" />
                            <img className="pic4" src={month4} alt="" />
                            <img data-aos="fade-left" className="pic5" src={month5} alt="" />
                        </div>
                        <div className="AutobiographyItemYear">
                            <div className="AutobiographyItemYear_text">
                                <div className="AutobiographyItemYear_text_subtitle">sách</div>
                                <div className="AutobiographyItemYear_text_title">Chuyện người tùy nữ</div>
                                <div className="AutobiographyItemYear_text_content">
                                    Một tác phẩm phản địa đàng là một tác phẩm hư cấu
                                    tái dựng xã hội phát triển theo hướng đen tối khủng khiếp,
                                    nơi đó mọi thứ đều trở nên trần trụi, ngột ngạt.
                                </div>
                                <div className="AutobiographyItemYear_text_read">
                                    <Link to="/product-detail/chuyen-nguoi-tuy-nu">
                                        <ButtonMain />
                                    </Link>
                                </div>
                            </div>
                            <div className="fancy1"></div>
                            <img data-aos="fade-down" className="pic1" src={year1} alt="" />
                            <img data-aos="fade-up-right" className="pic2" src={year2} alt="" />
                            <img className="pic3" src={year3} alt="" />
                            <img className="pic4" src={year4} alt="" />
                            <img data-aos="fade-left" className="pic5" src={year5} alt="" />
                        </div>
                    </div>
                    <div className="home_content_autobiographys_partner">
                        <div className="Partner">
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt1} alt="" />
                                </Link>
                            </div>
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt2} alt="" />
                                </Link>
                            </div>
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt3} alt="" />
                                </Link>
                            </div>
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt4} alt="" />
                                </Link>
                            </div>
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt5} alt="" />
                                </Link>
                            </div>
                            <div className="PartnerItem">
                                <Link to='/'>
                                    <img src={dt6} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>
        </>
    );
};

export default Home;
