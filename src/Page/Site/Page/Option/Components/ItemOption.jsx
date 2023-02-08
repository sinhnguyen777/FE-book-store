import { LoadingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import vipApi from '../../../../../api/vipApi';
import { notification } from 'antd';
import axios from 'axios';

const ItemOption = () => {
    const [vip, setvip] = useState();
    useEffect(() => {
        const fetchVip = async () => {
            const res = await vipApi.GetVip();
            setvip(res.data);
        };
        fetchVip();
    }, []);


    const handleClick = async (values) => {
        const user = JSON.parse(localStorage.getItem('user-info'));
        if (!user) {
            notification.open({
                message: 'Bạn chưa đăng nhập !',
                description:
                    'Bạn cần phải đăng nhập để thực hiện chức năng',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        } else {
            const data = {
                id: values._id,
                name: values.name,
                price: values.price
            };

            axios({
                maxRedirects: 0,
                method: 'post',
                url: 'https://be-library-online.onrender.com',
                data: data,
            })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data);
                        window.location = res.data.forwardLink;
                        // history.push('/congratulation', values.id)
                    } else {
                        console.log('error');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    };



    return (
        <>
            {vip ?
                vip.map((item, key) => (
                    <div className="Option-item" key={key}>
                        <div className="Option-item_item">
                            <div className="Option-item_content">
                                <div className="Option-item_content_title">{item.name}</div>
                                <div className="Option-item_content_text">
                                    <div className="Option-item_content_price">Giá: {item.price.toLocaleString('en', { style: 'currency', currency: 'USD' })}</div>
                                    <div className="Option-item_content_price">Thời hạn: {item.time} ngày</div>
                                </div>
                                <div className="Option-item_content_button">

                                    <button className="btn ButtonBanner" onClick={() => handleClick(item)}>Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <LoadingOutlined />
            }

        </>
    );
};

export default ItemOption;
