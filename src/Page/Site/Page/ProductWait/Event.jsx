import { SyncOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import prouctApi from '../../../../api/productApi'
import Clock from './Components/Clock'

const ProductWait = () => {
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()
    const [dataBook, setdataBook] = useState()
    const [dataBookDate, setdataBookDate] = useState()
    let interval

    const history = useHistory();
    const match = useRouteMatch();
    const startTimer = () => {
        if (dataBookDate) {
            const countDownDate = new Date(dataBookDate).getTime();
            console.log(countDownDate);
            interval = setInterval(() => {
                const now = new Date().getTime()
                const distance = countDownDate - now
                const days = Math.floor(distance / (24 * 60 * 60 * 1000))
                const hours = Math.floor(
                    (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )
                const minutes = Math.floor(
                    (distance % (60 * 60 * 1000)) / (1000 * 60)
                )
                const seconds = Math.floor(
                    (distance % (60 * 1000)) / 1000
                )
                if (distance < 0) {
                    clearInterval(interval.current)
                } else {
                    setTimerDays(days)
                    setTimerHours(hours)
                    setTimerMinutes(minutes)
                    setTimerSeconds(seconds)
                }
            })
        }
    }
    useEffect(() => {
        const slug = match.params.slug;
        const fetchProductID = async () => {
            const res = await prouctApi.GetProductsBySlug(slug);
            const today = new Date();
            const dateDebut = new Date( res.data[0].dateDebut)
            if(dateDebut<today){
                const data = {
                    id:res.data[0]._id,
                }
                 await prouctApi.UpdateDateDebut(data);
                    history.push(`/product-detail/${res.data[0].slug}`)
            }
            setdataBook(res.data[0]);
            setdataBookDate(res.data[0].dateDebut)
        };
        fetchProductID(slug);
    }, [])

    useEffect(() => {
        startTimer()
    })
    console.log(dataBookDate);

    return (
        <>
            <div className="event_banner">
                {
                    dataBook
                        ?
                        <div className="event_banner_text">
                            <h6>Sách</h6>
                            <h2>Đếm Ngược Ngày Phát Hành - {dataBook.nameProduct}</h2>
                            <p>{dataBook.description}
                            </p>
                            <p>
                                <Clock
                                    timerDays={timerDays}
                                    timerHours={timerHours}
                                    timerMinutes={timerMinutes}
                                    timerSeconds={timerSeconds}
                                />
                            </p>
                        </div>
                        :
                        <SyncOutlined spin />
                }
            </div>
        </>
    )
}

export default ProductWait
