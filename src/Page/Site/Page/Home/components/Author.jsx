import React from 'react'
import author1 from '../../../../../Assets/Images/Home/3309.jpg'
import author2 from '../../../../../Assets/Images/Home/5208.jpg'
import author3 from '../../../../../Assets/Images/Home/mga.jpg'
import author4 from '../../../../../Assets/Images/Home/lee2.jpg'

const author = [
    {
        author: 'author',
        name: 'Dale Carnegie',
        img: author1,
        description: 'Dale Breckenridge Carnegie (24 tháng 11 năm 1888 – 1 tháng 11 năm 1955)'
    },
    {
        author: 'author',
        name: 'Richard Adams',
        img: author2,
        description: 'Richard George Adams (9 tháng 5 năm 1920 - 24 tháng 12 năm 2016)'
    },
    {
        author: 'author',
        name: 'Margaret Atwood',
        img: author3,
        description: 'Margaret Eleanor Atwood (sinh ngày 18 tháng 11 năm 1939)'
    },
    {
        author: 'author',
        name: 'Harper Lee',
        img: author4,
        description: 'Nelle Harper Lee (28 tháng 4 năm 1926 – 19 tháng 2 năm 2016)'
    }
]
const Author = () => {
    return (
        <>
            <div className="home_content_author_inner">
                    <div className="home_content_author_inner_subtitle">dịch vụ của chúng tôi</div>
                    <div className="home_content_author_inner_title">Tác giả nổi bật</div>
                    <div className="home_content_author_inner_text">
                        Xây dựng thành công từ thất bại.Sự chán nản và thất bại là
                        hai bước đệm chắc chắn nhất dẫn tới thành công - Dale Carnegie.
                    </div>
            </div>
            <div className="home_content_author_lists">
                <div className="home_content_author_list">

                    {
                        author.map((item, index) => (
                            <div className="home_content_author_list_item" key={index}>
                                <div className="home_content_author_list_item_images">
                                    <div className="home_content_author_list_item_image">
                                        <img src={item.img} alt="" />
                                        <div className="fancy"></div>
                                    </div>
                                    <div className="home_content_author_list_item_info">
                                        <div className="home_content_author_list_item_info_posi">{item.author}</div>
                                        <div className="home_content_author_list_item_info_name">{item.name}</div>
                                        <div className="home_content_author_list_item_info_text">{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Author
