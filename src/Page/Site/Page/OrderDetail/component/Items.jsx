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
        <div className="BoxItem">
          <Image
            width={100}
            src={`https://beonlinelibrary.herokuapp.com/${DataDetail.images[0].image}`}
          />
          <div className="BoxContent">{quantity}</div>
        </div>
      ) : null}
    </>
  );
};

export default Items;
