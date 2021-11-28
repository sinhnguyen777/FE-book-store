import React from 'react'
import { Card, Divider, List } from 'antd';
import { NavLink } from 'react-router-dom';

export default function RelatedProducts() {
    const data = [
        {
            author: 'ADAM STRASS',
            title: 'TEasy Fast Healthy Recipes',
            minPrice: 29.00,
            maxPrice: 67.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/shop-grouped-product-image.png',
        },
        {
            author: 'ADAM STRASS',
            title: 'Symphony Of Trilogy',
            minPrice: 29.00,
            maxPrice: 67.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-2.jpg',
        },
        {
            author: 'ADAM STRASS',
            title: 'Raw Modeling and Makeup Tips',
            minPrice: 29.00,
            maxPrice: 67.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-11.jpg',
        },
        {
            author: 'BY JANE DOE',
            title: 'Fantasy Storytelling',
            minPrice: 29.00,
            maxPrice: 67.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-8.jpg',
        },
        {
            author: 'BY JAMES HOFFMAN',
            title: 'Summertime Love Stories',
            minPrice: 19.00,
            maxPrice: 25.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-5.jpg',
        },
        {
            author: 'BY JANE DOE',
            title: 'Love Stories From Paris',
            minPrice: 20.00,
            maxPrice: 28.00,
            image: 'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-12.jpg',
        },
    ];

    return (
        <div className="related_product_detail">
            <h2>Related products</h2>
            <List
                grid={{
                    gutter: 24,
                    column: 6,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card
                            className="related_product_detail_card"
                            bordered={false}
                            hoverable
                            bodyStyle={{ padding: '21px 0 37px' }}
                            cover={<img alt="example" src={item.image} />}
                        >
                            <NavLink to="" className="author">{item.author}</NavLink>
                            <h5 className="title">{item.title} </h5>
                            <p>
                                <span>${item.minPrice}</span> - <span>${item.maxPrice}</span>
                            </p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}
