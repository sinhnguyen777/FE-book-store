import React, { useEffect, useState } from 'react'
import { Result, Button } from 'antd';
import paymentApi from '../../../../api/paymentApi';
import userApi from '../../../../api/userApi';
import vipApi from '../../../../api/vipApi';
import { useHistory } from "react-router-dom";

export default function Congratulation() {
    const [dataVipPayment, setdataVipPayment] = useState({})
    const [userStore, setUserStore] = useState('')
    const [timeVip, settimeVip] = useState('')
    const [timeUpdate, settimeUpdate] = useState()
    const history = useHistory();
    
    useEffect(() => {
        const Getdata = async () => {
            const res = await paymentApi.GetdataVip()
            setdataVipPayment(res.data)
        }
        Getdata()
    }, [])

    useEffect(() => {
        const getStore = async () => {
            const user = await JSON.parse(localStorage.getItem('user-info'))
            if (user) {
                const data = user.data
                data.map(item => {
                    setUserStore(item);
                })
            }
        }
        getStore()
    }, [])

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
        console.log(userStore);

        const today = new Date()
        const duedate = new Date(userStore.vip);
        const handleDate = async () => {
            if (userStore.vip > today) {
                duedate.setDate(duedate.getDate() + timeVip)
                settimeUpdate(duedate.toISOString())
                console.log(duedate.toISOString());
                return duedate.toISOString()
            } else {
                duedate.setDate(today.getDate() + timeVip)
                settimeUpdate(duedate.toISOString())
                console.log(duedate.toISOString());
                return duedate.toISOString()

            }
        }

        const fetchUpdateVipUser = async () => {
            
            const dateAwait = await handleDate()
            try {
                const data = {
                    id: userStore._id,
                    fullName: userStore.fullName,
                    email: userStore.email,
                    password: userStore.password,
                    avatar: userStore.avatar,
                    vip: dateAwait,
                    createdAt: userStore.createdAt,
                    updatedAt: today.toISOString(),
                    __v: userStore.__v,
                }

                const res = await userApi.Update(data);
                if (res.status === 200) {
                    history.push('/account')
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchUpdateVipUser()


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
