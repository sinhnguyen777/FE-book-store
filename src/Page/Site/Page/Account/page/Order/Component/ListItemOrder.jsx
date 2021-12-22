import { Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import Items from "./Items";

const ListItemOrder = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  const user = getUser();
  const idUser = user.data[0]._id;
  const [order, setorder] = useState([]);
  useEffect(() => {
    const fetchGetOrder = async (idUser) => {
      const filter = {
        idUser: idUser,
      };
      const res = await orderApi.GetOrderDetail(filter);
      setorder(res.data);
    };

    fetchGetOrder(idUser);
  }, []);
  
  return (
    <>
      <div className="ListOrder">
        {order.map((item) => (
          <Items
            idProduct={item.idProduct}
            quantity={item.quantity}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      
    </>
  );
};

export default ListItemOrder;
