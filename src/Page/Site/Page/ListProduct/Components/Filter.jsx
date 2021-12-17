import React, { useEffect, useState } from 'react'
import InputSearch from '../../../Components/Common/Input/input'
import { Slider } from 'antd';
import { Link } from 'react-router-dom';
import cataApi from '../../../../../api/cataApi';
import { LoadingOutlined } from '@ant-design/icons';

const Filter = (props) => {
    const [catalog, setCatalog] = useState([])
    const [minPrice, setminPrice] = useState(0);
    const [maxPrice, setmaxPrice] = useState(500000);
    useEffect(() => {
        const fetchCata = async () => {
            const res = await cataApi.GetCata()
            setCatalog(res)
        }
        fetchCata()
    }, [])
    console.log(catalog);

    const handlePrice = (values) => {
        console.log(values);
        setminPrice(values[0]);
        setmaxPrice(values[1])
    }
    return (
        <>
            <div className="Filter-search">
                <InputSearch handleListAuthour ={props.handleListAuthour}/>
            </div>
            <div className="Filter-price">
                <div className="Filter-price_title">Lọc theo giá</div>
                <form action="">
                    <div className="Filter-price_slider">
                        <Slider range={{ draggableTrack: true }} defaultValue={[0, 500000]} onChange={handlePrice} max={500000} step={1000} />
                        <div className="Filter-price_amount">
                            <div className="Filter-price_amount_label">Giá:
                                <span className="Filter-price_amount_from"> {minPrice}đ</span> —
                                <span className="Filter-price_amount_to"> {maxPrice}đ</span>
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
            <div className="Filter-catalog">
                <div className="Filter-catalog_title">Danh mục</div>
                <div className="Filter-catalog_list">
                    <p>
                        <span onClick={() => props.handleListCata(null)}>Tất cả</span>
                    </p>
                    {
                        catalog.data ?
                            catalog.data.map((item, index) => (
                                <p key={index}>
                                    <span onClick={() => props.handleListCata(item._id)}>{item.nameCata}</span>
                                </p>
                            )) : <LoadingOutlined />
                    }
                </div>
            </div>
        </>
    )
}

export default Filter