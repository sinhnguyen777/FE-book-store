import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  ButtonCart,
} from "../../Components/Common/Button/Button";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";
import { removeFormCart } from "../../Page/Cart/cartSlide";

const CartHeader = () => {
  const ListCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const remove = (id) => {
    const action = removeFormCart(id);
    console.log(action);
    dispatch(action);
  };
  let history = useHistory();
  const handleCartClick = () => {
    history.push('/cart')
  }
  return (
    <>
      {ListCart.cartItem.length === 0 ? (
        <Empty />
      ) : (
        ListCart.cartItem.map((item, index) => (
          <div className="CartHeaderItem" key={index}>
            <div className="CartHeaderItem_image">
              <Link to={`/product-detail/${item.productDetail.slug}`}>
                <img
                  src={`https://beonlinelibrary.herokuapp.com/${item.productDetail.images[0].image}`}
                  alt={item.productDetail.nameProduct}
                />
              </Link>
            </div>
            <div className="CartHeaderItem_content">
              <h6 className="CartHeaderItem_content_title">
                <Link to={`/product-detail/${item.productDetail.slug}`}>{item.productDetail.nameProduct}</Link>
              </h6>
              <p className="CartHeaderItem_content_price">
                {item.quantity}x
                <span className="CartHeaderItem_content_amount">
                  {item.productDetail.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                </span>
              </p>
              <p className="CartHeaderItem_content_remove" onClick={()=>{remove(item.id)}}>
                <CloseCircleOutlined />
              </p>
            </div>
          </div>
        ))
      )}
      {ListCart.cartItem.length === 0 ? (
        ""
      ) : (
        <div className="CartHeaderItem_bton">
          <p onClick={handleCartClick}>
            <ButtonCart />
          </p>
          
        </div>
      )}
    </>
  );
};

export default CartHeader;
