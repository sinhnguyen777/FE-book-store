import React, { useEffect, useState } from 'react'
import Clock from './Components/Clock'

const Event = () => {
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()
    const [dataBook, setdataBook] = useState()
    let interval 
    const startTimer = () => {
        const countDownDate = new Date("February 1, 2022").getTime();
        console.log(countDownDate);
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now 
            const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % ( 60 * 60 * 1000)) / (1000 * 60)
            )
            const seconds = Math.floor(
                (distance % ( 60 * 1000)) / 1000
            )
            if(distance < 0){
                clearInterval(interval.current)
            }else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        })
    }
    useEffect(() => {
        startTimer()
    })
    return (
        <>
            <div className="event_banner">
                <div className="event_banner_text">
                    <h6>Sách</h6>
                    <h2>Sách sắp phát hành - Chú gấu Bắc cực</h2>
                    <p>Cuốn sách là tập hợp mười câu chuyện,
                        mười chuyến phiêu lưu của Lars - một chú gấu trắng bé
                        sống ở vùng cực Bắc. Với tinh thần ham mê khám phá, 
                        tấm lòng yêu thương và sự dũng cảm, Lars sẽ là người bạn
                        đồng hành thân thiết, là tấm gương sáng cho các bạn đọc
                        nhỏ tuổi.
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
            </div>
        </>
    )
}

export default Event
