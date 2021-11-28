import React from 'react'
import ItemAbout from './Components/ItemAbout'

const About = () => {
    return (
        <>
             <div className="about_banner">
                <div className="about_banner_title">
                    <h6>info</h6>
                    <h2>Về chúng tôi</h2>
                </div>
            </div>
            <div className="layout">
                <div className="about_list">
                    <ItemAbout/>
                </div>
            </div>
        </>
    )
}

export default About
