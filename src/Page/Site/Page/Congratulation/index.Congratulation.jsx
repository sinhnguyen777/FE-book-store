import React, { useEffect, useState } from 'react'
import { Result, Button } from 'antd';
import paymentApi from '../../../../api/paymentApi';
import userApi from '../../../../api/userApi';


export default function Congratulation() {
    const [dataVip, setdataVip] = useState({})
    const [idUser, setIdUser] = useState({})

    // const user = JSON.parse(localStorage.getItem('user-info'))

    // if (user) {
    //     const data = user.data

    //     data.map(item => {
    //         setIdUser(item._id);
    //     })
    // }

    useEffect(() => {
        const Getdata = async () => {
            const res = await paymentApi.GetdataVip()
            setdataVip(res)
        }
        Getdata()

        // const GetUser = async () => {
        //     const res = await userApi.GetUserById(idUser)
        //     console.log(res.data);
        // }
        // GetUser()

    }, [])

    const handleClick = async () => {
        console.log(dataVip);
    }

    return (
        <div style={{ marginTop: '90px' }}>
            <Result
                status="success"
                title={`Chúc mừng bạn đã trở thành VIP `}
                subTitle="Nhấn tiếp tục để xem những ưu đãi đặc biệt"
                extra={[
                    <Button
                        type="primary"
                        key="console"
                        onClick={() => handleClick()}
                    >
                        Tiếp tục
                    </Button>
                ]}
            />
        </div>
    )
}
