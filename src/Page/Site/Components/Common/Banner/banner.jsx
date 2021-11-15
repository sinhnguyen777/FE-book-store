import { Carousel } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonBanner } from '../Button/Button';
import imgbn1 from '../../../../../Assets/Images/Banner/slide-banner-1.jpg'
import imgbn2 from '../../../../../Assets/Images/Banner/slide-banner-2.png'
import imgbn2_1 from '../../../../../Assets/Images/Banner/slide-banner-2_1.png'
import imgbn2_2 from '../../../../../Assets/Images/Banner/slide-banner-2_2.png'

function onChange(a, b, c) {
    console.log(a, b, c);
  }

const Banner = () => {
    return (
        <div className="banner">
            <Carousel afterChange={onChange} >
                <div>
                    <div className="banner_item three">
                        <img className="three_pic" src={imgbn2} alt="" />
                        <img className="three_pic1" src={imgbn2_1} alt="" />
                        <img className="three_pic2" src={imgbn2_2} alt="" />
                        <div className="banner_item_txt three_txt">
                        <p className="banner_item_txt_chapterone three_txt_chapterone">It’s ChapterOne</p>
                            <p className="banner_item_txt_main three_txt_chapterone">Your world of words</p>
                            <p className="banner_item_txt_decs three_txt_chapterone">Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna
                            </p>
                            <p className="banner_item_txt_read three_txt_chapterone">
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
                        <p className="banner_item_txt_chapterone true_txt_chapterone">It’s ChapterOne</p>
                            <p className="banner_item_txt_main true_txt_chapterone">Your world of words</p>
                            <p className="banner_item_txt_decs true_txt_chapterone">Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna
                            </p>
                            <p className="banner_item_txt_read true_txt_chapterone">
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
                            <p className="banner_item_txt_chapterone one_txt_chapterone">It’s ChapterOne</p>
                            <p className="banner_item_txt_main one_txt_chapterone">Your world of words</p>
                            <p className="banner_item_txt_decs one_txt_chapterone">Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna
                            </p>
                            <p className="banner_item_txt_read one_txt_chapterone">
                                <Link to='/'>
                                    <ButtonBanner/>
                                </Link>
                            </p>
                        </div>
                        <div className="banner_item_icon"></div>
                    </div>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Banner
