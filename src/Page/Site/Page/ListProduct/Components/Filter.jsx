import React, { useEffect, useState } from 'react'
import InputSearch from '../../../Components/Common/Input/input'
import { Slider } from 'antd';
import { Link } from 'react-router-dom';
import cataApi from '../../../../../api/cataApi';
import { LoadingOutlined } from '@ant-design/icons';
const Filter = () => {
    const [catalog, setCatalog] = useState([])
    useEffect(() => {
        const fetchCata = async () => {
            const res = await cataApi.GetCata()
            setCatalog(res)
        }
        fetchCata()
    }, [])
    console.log(catalog);
    return (
        <>
            <div className="Filter-search">
                <InputSearch/>
            </div>
            <div className="Filter-price">
                <div className="Filter-price_title">Lọc theo giá</div>
                <form action="">
                    <div className="Filter-price_slider">
                        <Slider range={{ draggableTrack: true }} defaultValue={[0, 100]} />
                        <div className="Filter-price_amount">
                            <div className="Filter-price_amount_label">Giá: 
                                <span className="Filter-price_amount_from"> 0đ</span> —
                                <span className="Filter-price_amount_to"> 100đ</span>
                            </div>
                            <button className="Filter-price_amount_button">Lọc</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Filter-line">
                <span className="Filter-line_left Filter-line_line"></span>
                <div className="Filter-line_icon">❦</div>
                <div className="Filter-line_right Filter-line_line"></div>
            </div>
            <div className="Filter-product-top">
                <div className="Filter-product-top_title">Top 5 trong tuần</div>
                <div className="Filter-product-top_list">
                    <div className="Filter-product-top_list_image">
                        <Link to='/product-detail'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-741x1024.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="Filter-product-top_list_image">
                        <Link to='/product-detail'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-741x1024.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="Filter-product-top_list_image">
                        <Link to='/product-detail'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-741x1024.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="Filter-product-top_list_image">
                        <Link to='/product-detail'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-741x1024.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="Filter-product-top_list_image">
                        <Link to='/product-detail'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4-741x1024.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Filter-line">
                <span className="Filter-line_left Filter-line_line"></span>
                <div className="Filter-line_icon">❦</div>
                <div className="Filter-line_right Filter-line_line"></div>
            </div>
            <div className="Filter-catalog">
                <div className="Filter-catalog_title">Danh mục</div>
                <div className="Filter-catalog_list">
                    {
                        catalog.data ?
                        catalog.data.map((item,index) => ( 
                            <p key={index}>
                                <Link to='/shop'>{item.nameCata}</Link>
                            </p>
                        )) : <LoadingOutlined/>
                    }
                </div>
            </div>
        </>
    )
}

export default Filter
