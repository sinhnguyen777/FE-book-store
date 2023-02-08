import React from 'react';
import dt1 from '../../../../../Assets/Images/Home/dt-5.jpg';
import dt2 from '../../../../../Assets/Images/Home/dt-6.jpg';
import dt3 from '../../../../../Assets/Images/Home/dt-9.jpg';
import dt4 from '../../../../../Assets/Images/Home/dt-10.jpg';
import dt5 from '../../../../../Assets/Images/Home/dt-11.jpg';
import dt6 from '../../../../../Assets/Images/Home/dt-19.jpg';
import { Link } from 'react-router-dom';

const PartnerComponent = () => {
    return (
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
    );
};

export default PartnerComponent;
