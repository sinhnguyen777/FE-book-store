import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemProduct = (props) => {
    const {data} = props
    console.log(data);
    return (
        <>
            {
                data ?
                data.map((item, index) => (
                    <div className="ItemProduct ItemProductHome" key={index}>
                        <Link to={`/product-detail/${item.slug}`}>
                            <div className="ItemProduct_inner">
                                <div className="ItemProduct_inner_image">
                                    <img style={{width: '100%', height: '400px'}} src={`https://beonlinelibrary.herokuapp.com/${item.images[0].image}`} alt={item.nameProduct} />
                                    <div className="ItemProduct_inner_image_sold">
                                        {item.productHot === true ? <span className="ItemProduct_inner_image_sold1">HOT</span> : null}
                                        {item.productSale === true ? <span className="ItemProduct_inner_image_sold1">SALE</span> : null}
                                    </div>
                                    
                                    <div className="ItemProduct_inner_image_text">
                                        <Link to={`/read-book/${item._id}`} className="ItemProduct_inner_image_text_readmore">Đọc Ngay</Link>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="ItemProduct_text">
                                <div className="ItemProduct_text_author">
                                    {item.author}
                                </div>
                                <h5 className="ItemProduct_text_title">
                                    {item.nameProduct}
                                </h5>
                                <div className="ItemProduct_text_price">{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                            </div>
                        </Link>
                    </div>
                )) : <LoadingOutlined/>
            }
        </>
        
    )
}

export default ItemProduct
