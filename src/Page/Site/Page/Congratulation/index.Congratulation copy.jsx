import React, { useEffect, useState } from 'react'
import { Result, Button } from 'antd';
import paymentApi from '../../../../api/paymentApi';
import userApi from '../../../../api/userApi';
import vipApi from '../../../../api/vipApi';

export default function Congratulation() {
    const [dataVipPayment, setdataVipPayment] = useState({})
    const [idUserStore, setIdUserStore] = useState('')
    // const [idUserDB, setidUserDB] = useState('')
    const [timeVip, settimeVip] = useState('')

    useEffect(() => {
        const Getdata = async () => {
            const res = await paymentApi.GetdataVip()
            setdataVipPayment(res.data)
        }
        Getdata()
    }, [])

    async function getStore() {
        const user = JSON.parse(localStorage.getItem('user-info'))
        if (user) {
            const data = user.data
            data.map(item => {
                setIdUserStore(String(item));
            })
        }
    }

    // useEffect(() => {
    //     const GetUserId = async () => {
    //         const res = await userApi.GetUserById(idUserStore)
    //         setidUserDB(res.data)
    //     }
    //     GetUserId()
    // }, [idUserStore])

    useEffect(() => {
        const GetDataVip = async () => {
            const res = await vipApi.GetVip()
            const data = res.data
            data.map((item) => {
                if (item._id === dataVipPayment.id) {
                    settimeVip(item.time)
                }
            })
        }
        GetDataVip()
    }, [dataVipPayment.id])

    const handleClick = async () => {
        // console.log(dataVipPayment.id);
        getStore()
        console.log(idUserStore);

        // var now = new Date();
        // var duedate = new Date(now);
        // duedate.setDate(now.getDate() + 365);
        // console.log("Now:     ", now);
        // console.log("Due Date:", duedate);

        const today = new Date()
        // const duedate = new Date(today);
        // duedate.setDate(today.getDate() + timeVip)
        
        // if (idUserStore.vip > today) {

        // } else {
        //     console.log(false);
        // }
    }

    return (
        <div style={{ marginTop: '90px' }}>
            <Result
                status="success"
                title={`Chúc mừng bạn đã trở thành ${dataVipPayment.name}`}
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
