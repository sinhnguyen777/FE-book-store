import { Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import orderApi from "../../../../../api/orderApi";
import prouctApi from "../../../../../api/productApi";
import Items from "./Items";

const ListItem = (props) => {
  const [DataItem, setDataItem] = useState([]);

  useEffect(() => {
    const fetchGetDetail = async (id) => {
      const filter = {
        idOrder: id,
      };
      const res = await orderApi.GetOrderDetail(filter);
      console.log(res);
      setDataItem(res.data);
    };
    fetchGetDetail(props.id);
  }, []);
  console.log(DataItem);

  return (
    <>
    <div className="ListOrder">
      {DataItem.map((item) => (
        
          <Items idProduct={item.idProduct} quantity={item.quantity} />
      ))}
      
    </div>
    Tổng :{" "}
      {DataItem.map((item) => (
        <>
          {(item.price * item.quantity).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </>
      ))}
    </>
  );
};

export default ListItem;
