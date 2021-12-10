import React from 'react'
import {
    Rate,
    Comment,
    Avatar,
    List,
} from 'antd';
import FormReview from './FormReview';
import { EnterOutlined } from '@ant-design/icons';
export default function Comments() {
    const data = [
        {
            author: 'Michael Lord - New York Times',
            rate: 4,
            content: (
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                </p>
            ),
            imageBottomComment: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-1.png',
        },
        {
            author: 'Joanne Smith - Huffington Post',
            rate: 3,
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            imageBottomComment: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-2.png',
        },
        {
            author: 'Minnie Loyd - The Guardian',
            rate: 5,
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            imageBottomComment: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-3.png',
        },
    ];
    return (
        <>
            <div className="comment_product_detail">
                <h2>Bình luận</h2>
                <div className="description_tab">
                    <div className="content_tab_infomation">
                        
                        <div className="content_tab_infomation_avatar">
                            <Avatar
                                className="avatar_comment"
                                src="https://znews-photo.zadn.vn/w660/Uploaded/unvjuas/2021_10_14/rose_blackpink_vogue_korea_x_ysl_may_2021_3.jpg"
                                alt="Han Solo"
                                size={{
                                    xs: 24,
                                    sm: 32,
                                    md: 40,
                                    lg: 64,
                                    xl: 60,
                                    xxl: 100,
                                }}
                            />
                        </div>
                        <div className="content_tab_infomation_content">
                            <form style={{width: '100%'}} action="">
                                <div className="form-comment">
                                    <input className="comment-field" type="text" placeholder="Viết bình luận..."/>
                                    <button type="submit" className="comment-submit comment-field">
                                        <span><EnterOutlined /></span>
                                    </button>
                                </div>
                            </form>
                            

                        </div>
                    </div>
                            {/* <div tab="Đánh giá" key="3">
                                <div className="content_tab_reviews">
                                    <p>There are no reviews yet.</p>
                                    <span className="rely_title">
                                        <span>Be the first to review “Amster Hamster Trip”</span>
                                        <Rate allowClear={false} defaultValue={0} />
                                    </span>
                                    <FormReview />
                                </div>
                            </div> */}
                </div>
                <Comment
                    className="comment_product_detail_content"
                    // author={<a className="author_comment">BELGIUM</a>}
                    avatar={
                        <Avatar
                            className="avatar_comment"
                            src="https://vcdn-vnexpress.vnecdn.net/2021/09/24/lisa-6874-1632475092.jpg"
                            alt="Han Solo"
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                        />
                    }
                    content={
                        <div>
                            <h3 className="author_comment_title">Lalisa Manobal</h3>    
                            <p className="description_comment">
                                Sách hay quá. hahahahaa
                            </p>
                        </div>
                    }
                />
                <Comment
                    className="comment_product_detail_content"
                    // author={<a className="author_comment">BELGIUM</a>}
                    avatar={
                        <Avatar
                            className="avatar_comment"
                            src="https://media-cdn.laodong.vn/storage/newsportal/2021/7/28/935683/Jisoo-Blackpink.jpg?w=720&crop=auto&scale=both"
                            alt="Han Solo"
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                        />
                    }
                    content={
                        <div>
                            <h3 className="author_comment_title">Kim Jisoo</h3>    
                            <p className="description_comment">
                                Sách này vô cùng hay luôn nha
                            </p>
                        </div>
                    }
                />
                <Comment
                    className="comment_product_detail_content"
                    // author={<a className="author_comment">BELGIUM</a>}
                    avatar={
                        <Avatar
                            className="avatar_comment"
                            src="https://kenh14cdn.com/203336854389633024/2021/12/1/photo-1-16383563497771087299172.jpg"
                            alt="Han Solo"
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                        />
                    }
                    content={
                        <div>
                            <h3 className="author_comment_title">Kim Jennie</h3>    
                            <p className="description_comment">
                                Unnie Jisoo nói hay nên đọc
                            </p>
                        </div>
                    }
                />
                <Comment
                    className="comment_product_detail_content"
                    // author={<a className="author_comment">BELGIUM</a>}
                    avatar={
                        <Avatar
                            className="avatar_comment"
                            src="https://znews-photo.zadn.vn/w660/Uploaded/unvjuas/2021_10_14/rose_blackpink_vogue_korea_x_ysl_may_2021_3.jpg"
                            alt="Han Solo"
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                        />
                    }
                    content={
                        <div>
                            <h3 className="author_comment_title">Park Chaeyoung</h3>    
                            <p className="description_comment">
                                Nghe đồn sách hay lắm hả. hahahah
                            </p>
                        </div>
                    }
                />
                
            </div>
            <div className="comment-list">
                <h2>Đánh giá</h2>
                
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li className="item_comment">
                            <Rate style={{ color: '#d14031' }} disabled defaultValue={item.rate} />
                            <Comment
                                className="content_item_comment"
                                content={item.content}
                            >
                            </Comment>
                            <div className="bottom_item_comment">
                                <img src={item.imageBottomComment} alt="" />
                                <span className="right_bottom_item_comment">{item.author}</span>
                            </div>
                        </li>
                    )}
                />
                <div className="description_tab">
                    <div tab="Đánh giá" key="3">
                        <div className="content_tab_reviews">
                            {/* <p>There are no reviews yet.</p> */}
                            <span className="rely_title">
                                <span>Hãy để lại đánh giá của bạn</span>
                                <Rate allowClear={false} defaultValue={0} />
                            </span>
                            <FormReview />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
