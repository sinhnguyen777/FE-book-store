import React from 'react'
import Banner from '../../Components/Common/Banner/banner'
import Tab from '../../Components/Common/Tabs/tabs'
import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxImg from './components/ParallaxImg'
import imgprl from '../../../../Assets/Images/Home/home-2-parallax-image-1.jpg'
import { ButtonPara } from '../../Components/Common/Button/Button'

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
                            <ButtonPara/>
                        </ParallaxImg>
                    </ParallaxProvider>                 
                </div>
                <div className="home_content_author">
                    <section className="section-home">

                    </section>
                </div>
                
            </div>
        </div>
    )
}

export default Home
