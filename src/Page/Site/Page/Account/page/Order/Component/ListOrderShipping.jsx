import React, { useEffect, useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import List from "./List";

const ListOrderShipping = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  const user = getUser();
  const idUser = user.data[0]._id;
  const [orderShipping, setorderShipping] = useState([]);

  useEffect(() => {
    const fetchGetOrderPending = async (idUser, idOrder) => {
      const filter = {
        idUser: idUser,
        idOrder: idOrder,
        status: true,
      };
      const res = await orderApi.GetOrder(filter);
      setorderShipping(res.data);
    };

    fetchGetOrderPending(idUser);
  }, []);
  return (
    <>
      <div className="ListOrder">
        {orderShipping.map((item) => (
          <List idOrder={item._id} />
        ))}
      </div>
    </>
  );
};

export default ListOrderShipping;
