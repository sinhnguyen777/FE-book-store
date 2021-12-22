import { Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import Items from "./Items";
import List from "./List";

const ListItemOrderPending = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  const user = getUser();
  const idUser = user.data[0]._id;
  const [orderPending, setorderPending] = useState([]);

  useEffect(() => {
    const fetchGetOrderPending = async (idUser, idOrder) => {
      const filter = {
        idUser: idUser,
        idOrder: idOrder,
        status: false,
      };
      const res = await orderApi.GetOrder(filter);
      setorderPending(res.data);
    };

    fetchGetOrderPending(idUser);
  }, []);
  return (
    <>
      <div className="ListOrder">
        {orderPending.map((item) => (
          <List idOrder={item._id} />
        ))}
      </div>
    </>
  );
};

export default ListItemOrderPending;
