import React from 'react'
import ButtonMain from '../../../Components/Common/Button/Button'
import month1 from '../../../../../Assets/Images/Home/home-2-rev-2-img-2.jpg'
import month2 from '../../../../../Assets/Images/Home/3309.jpg'
import month3 from '../../../../../Assets/Images/Home/home-2-rev-2-img-6.png'
import month4 from '../../../../../Assets/Images/Home/home-2-rev-2-img-7.png'
import month5 from '../../../../../Assets/Images/Home/home-2-rev-2-img-5.png'

import year1 from '../../../../../Assets/Images/Home/home-2-rev-3-img-6.jpg'
import year2 from '../../../../../Assets/Images/Home/mga.jpg'
import year3 from '../../../../../Assets/Images/Home/home-2-rev-3-image-4.png'
import year4 from '../../../../../Assets/Images/Home/home-2-rev-3-image-1.png'
import year5 from '../../../../../Assets/Images/Home/home-2-rev-3-image-2.png'

const Autobiography = () => {
    return (
        <>
        <div className="AutobiographyItemMonth">
            <div className="AutobiographyItemMonth_text">
                <div className="AutobiographyItemMonth_text_subtitle">hồi ký</div>
                <div className="AutobiographyItemMonth_text_title">Đắc nhân tâm</div>
                <div className="AutobiographyItemMonth_text_content">
                    Đắc Nhân Tâm là cuốn sách đưa ra các lời khuyên về cách thức cư xử,
                    ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống
                    .Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn 
                    để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,...
                </div>
                <div className="AutobiographyItemMonth_text_read">
                    <ButtonMain/>
                </div>
            </div>
            <div className="fancy1"></div>
            <img data-aos="fade-down-right" className="pic1" src={month1} alt="" />
            <img data-aos="fade-up-left" className="pic2" src={month2} alt="" />
            <img className="pic3" src={month3} alt="" />
            <img className="pic4" src={month4} alt="" />
            <img data-aos="fade-left" className="pic5" src={month5} alt="" />
        </div>
        <div className="AutobiographyItemYear">
            <div className="AutobiographyItemYear_text">
            <div className="AutobiographyItemYear_text_subtitle">hồi ký</div>
                <div className="AutobiographyItemYear_text_title">Chuyện người tùy nữ</div>
                <div className="AutobiographyItemYear_text_content">
                    Một tác phẩm phản địa đàng là một tác phẩm hư cấu 
                    tái dựng xã hội phát triển theo hướng đen tối khủng khiếp,
                    nơi đó mọi thứ đều trở nên trần trụi, ngột ngạt.
                </div>
                <div className="AutobiographyItemYear_text_read">
                    <ButtonMain/>
                </div>
            </div>
            <div className="fancy1"></div>
            <img data-aos="fade-down" className="pic1" src={year1} alt="" />
            <img data-aos="fade-up-right" className="pic2" src={year2} alt="" />
            <img className="pic3" src={year3} alt="" />
            <img className="pic4" src={year4} alt="" />
            <img data-aos="fade-left" className="pic5" src={year5} alt="" />
        </div>
        </>
    )
}

export default Autobiography
