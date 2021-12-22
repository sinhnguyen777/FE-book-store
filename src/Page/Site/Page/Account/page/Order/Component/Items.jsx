import React, { useEffect, useState } from "react";
import { Image } from "antd";
import prouctApi from "../../../../../../../api/productApi";
import { Link } from "react-router-dom";

const Items = (props) => {
  const { quantity, idProduct ,createdAt} = props;
  const [DataDetail, setDataDetail] = useState();
  useEffect(() => {
    const fetchGetDetail = async () => {
      const res = await prouctApi.GetProductsById(idProduct);
      setDataDetail(res.data);
    };
    fetchGetDetail();
  }, []);
  console.log(DataDetail);

  return (
    <>
      {DataDetail ? (
        <div className="BoxItemCartOrder" >
          <div className="BoxItemCartOrder_item" style={{display: 'flex'}}>
            <div className="BoxItemCartOrder_content">
              <Image
                width={100}
                src={`https://beonlinelibrary.herokuapp.com/${DataDetail.images[0].image}`}
              />
            </div>

            <div className="BoxItemCartOrder_content">
              <div className="BoxItemCartOrder_content_item">
                <p className="BoxItemCartOrder_content_item_name">
                  <Link to={`/read-book/${DataDetail._id}`}>{DataDetail.nameProduct}</Link>
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
                  {(quantity * DataDetail.price).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="BoxItemCartOrder_item" style={{fontSize: "19px"}}>
            Đơn hàng ngày: {createdAt}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Items;
