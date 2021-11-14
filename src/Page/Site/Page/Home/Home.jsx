
import React from 'react'
import Banner from '../../Components/Common/Banner/banner'
import Tab from '../../Components/Common/Tabs/tabs'

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
            </div>
        </div>
    )
}

export default Home
