import React from 'react'
import Banner from '../../Components/Common/Banner/banner'
import Tab from '../../Components/Common/Tabs/tabs'
import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxImg from './Components/ParallaxImg'
import imgprl from '../../../../Assets/Images/Home/home-2-parallax-image-1.jpg'
import { ButtonPara } from '../../Components/Common/Button/Button'
import Autobiography from './Components/Autobiography'
import Partner from './Components/Partner'
import Author from './Components/Author'

const Home = () => {
    return (
        <div className="home">
            <div className="home_content">
                <div className="home_content_banner">
                    <Banner/>
                </div>
                <div className="home_content_categories">
                    <div className="home_content_categories_list">
                        <Tab/>
                    </div>                   
                </div>
                <div className="home_content_parallax">
                    <ParallaxProvider>
                        <ParallaxImg imgsrc={imgprl} height="550px" opacity=".5">
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
                                    <ButtonPara/>
                                </p>
                            </div>
                        </ParallaxImg>
                    </ParallaxProvider>                 
                </div>
                <div className="home_content_author">
                    <section className="section-home">
                        <Author />
                    </section>
                </div>
                <div className="home_content_autobiographys">
                    <Autobiography/>
                </div>
                <div className="home_content_autobiographys_partner">
                    <Partner/>
                </div>
            </div>
        </div>
    )
}

export default Home
