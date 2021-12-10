import { LoadingOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import vipApi from '../../../../../api/vipApi'

const ItemOption = () => {
    const [vip, setvip] = useState([])
    useEffect(() => {
        const fetchVip = async () => {
            const res = await vipApi.GetVip()
            setvip(res.data)
        }
        fetchVip()
    }, [])
    console.log(vip);
    return (
        <>
        {   vip ?
            vip.map((item,key) => (
                <div className="Option-item" key={key}>
                    <div className="Option-item_item">
                        <div className="Option-item_content">
                            <div className="Option-item_content_title">{item.name}</div>
                            <div className="Option-item_content_text">
                                <div className="Option-item_content_price">Giá: {item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                                <div className="Option-item_content_price">Thời hạn: {item.time} ngày</div>
                            </div>
                            <div className="Option-item_content_button">
                                <button className="btn ButtonBanner">Mua Ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            )) : <LoadingOutlined />
        }
            
        </>
    )
}

export default ItemOption
