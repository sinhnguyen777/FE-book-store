import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { data } from "jquery";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import prouctApi from "../../../../../../api/productApi";
import wishlistApi from "../../../../../../api/wishlistApi";

const ItemWishList = (props) => {
  const { data, idUser } = props;
  const [product, setproduct] = useState();
  useEffect(() => {
    const fetchDataUser = async (idProduct) => {
      const res = await prouctApi.GetProductsById(idProduct);
      setproduct(res.data);
    };

    fetchDataUser(data.idProduct);
  }, []);
  let history = useHistory();

  const handleRemove = async (idUser, id) => {
    try {
      const list = {
        idUser: idUser,
        id: id,
      };
      const res = await wishlistApi.DelWishList(list);
      if (res.data.code === "200") {
        Swal.fire(
          "Xóa Thành Công!",
          "Xóa khỏi danh sách sản phẩm yêu thích",
          "success"
        ).then((result) => {
          if (result.isConfirmed) {
            props.handleRender();
            history.push({ pathname: "/account/wish-list" });
          }
        });
      } else {
        Swal.fire("Mày là hacker đúng ko ", "đéo xóa được đâu", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Ôi lỗi rồi", "Xóa thất bại", "error").then((result) => {
        if (result.isConfirmed) {
          history.push("/account/wish-list");
        }
      });
    }
  };
  return (
    <>
      {product ? (
        <div className="ItemWishList ItemProduct">
          
          <Link to={`/product-detail/${product.slug}`}>
            <div className="ItemProduct_inner">
              <div className="ItemProduct_inner_image">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={`https://beonlinelibrary.herokuapp.com/${product.images[0].image}`}
                  alt={product.nameProduct}
                />
                <div className="ItemProduct_inner_image_sold">
                  {product.productHot === true ? (
                    <span className="ItemProduct_inner_image_sold1">HOT</span>
                  ) : null}
                  {product.productSale === true ? (
                    <span className="ItemProduct_inner_image_sold1">SALE</span>
                  ) : null}
                </div>

                <div className="ItemProduct_inner_image_text">
                  <Link
                    to={`/read-book/${product._id}`}
                    className="ItemProduct_inner_image_text_readmore"
                  >
                    Đọc Ngay
                  </Link>
                </div>
              </div>
            </div>

            <div className="ItemProduct_text">
              <div className="ItemProduct_text_author">{product.author}</div>
              <h5 className="ItemProduct_text_title">{product.nameProduct}</h5>
              <div className="ItemProduct_text_price">
                {product.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </Link>
          <Button type="primary" danger onClick={() => handleRemove(idUser, data._id)} className="ItemWishList_delete">Bỏ thích</Button>
        </div>
      ) : (
        <LoadingOutlined />
      )}
    </>
  );
};

export default ItemWishList;
