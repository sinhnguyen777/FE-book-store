import React, { useEffect, useState } from "react";
import { Image } from "antd";
import prouctApi from "../../../../../api/productApi";

const Items = (props) => {
  const { quantity, idProduct } = props;
  const [DataDetail, setDataDetail] = useState();
  useEffect(() => {
    const fetchGetDetail = async () => {
      const res = await prouctApi.GetProductsById(idProduct);
      console.log(res);
      setDataDetail(res.data);
    };
    fetchGetDetail();
  }, []);
  return (
    <>
      {DataDetail ? (
        <div className="BoxItemCartOrder">
          <div className="BoxItemCartOrder_content">
            <Image
              width={100}
              src={`https://beonlinelibrary.herokuapp.com/${DataDetail.images[0].image}`}
            />
          </div>

          <div className="BoxItemCartOrder_content">
            <div className="BoxItemCartOrder_content_item">
              <p className="BoxItemCartOrder_content_item_name">
                {DataDetail.nameProduct}
              </p>
              <p className="BoxItemCartOrder_content_item_price">
                Giá:{" "}
                {DataDetail.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p className="BoxItemCartOrder_content_item_quantity">
                Số lượng: {quantity}
              </p>
              <p className="BoxItemCartOrder_content_item_quantity">
                Tổng:{" "}
                {(quantity *
                  DataDetail.price).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      
    </>
  );
};

export default Items;
