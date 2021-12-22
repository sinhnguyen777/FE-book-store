import React, { useEffect, useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import List from "./List";

const ListOrderCancel = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  const user = getUser();
  const idUser = user.data[0]._id;
  const [orderCancel, setorderCancel] = useState([]);

  useEffect(() => {
    const fetchGetOrderPending = async (idUser, idOrder) => {
      const filter = {
        idUser: idUser,
        idOrder: idOrder,
        cancel: true,
      };
      const res = await orderApi.GetOrder(filter);
      setorderCancel(res.data);
    };

    fetchGetOrderPending(idUser);
  }, []);
  return (
    <>
      <div className="ListOrder">
        {orderCancel.map((item) => (
          <List idOrder={item._id} />
        ))}
      </div>
    </>
  );
};

export default ListOrderCancel;
