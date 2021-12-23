import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { removeFormCart } from "../cartSlide";

const ItemCart = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const remove = (id) => {
    const action = removeFormCart(id);
    console.log(action);
    dispatch(action);
  };

  return (
    <>
      <tr className="cart-item">
        <td className="cart-product-remove" onClick={()=>{remove(item.id)}}>x</td>
        <td className="cart-product-image">
          <Link to={`/product-detail/${item.productDetail.slug}`}>
            <img
              src={`https://beonlinelibrary.herokuapp.com/${item.productDetail.images[0].image}`}
              alt={item.productDetail.nameProduct}
            />
          </Link>
        </td>
        <td className="cart-product-name">
          <Link to={`/product-detail/${item.productDetail.slug}`}>{item.productDetail.nameProduct}</Link>
        </td>
        <td className="cart-product-price">{item.productDetail.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
        <td className="cart-product-quantity">
          <div className="cart-product-quantity_item">
            <div className="cart-product-quantity_item_input">
                {item.quantity}
            </div>
          </div>
        </td>
        <td className="cart-product-total">{(item.quantity*item.productDetail.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
      </tr>
    </>
  );
};

export default ItemCart;
