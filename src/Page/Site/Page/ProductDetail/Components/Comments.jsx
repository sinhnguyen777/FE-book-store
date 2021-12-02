import React from 'react'
import {
    Rate,
    Comment,
    Avatar,
    List,
} from 'antd';
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
        <div>
            <Comment
                className="comment_product_detail"
                author={<a className="author_comment">BELGIUM</a>}
                avatar={
                    <Avatar
                        className="avatar_comment"
                        src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/avatar-2-100x100.png"
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
                        <h3 className="author_comment_title">Jessica Johnson</h3>
                        <p className="description_comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                }
            />
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
        </div>
    )
}
