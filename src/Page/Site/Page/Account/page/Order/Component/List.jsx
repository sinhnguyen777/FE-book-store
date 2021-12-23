import React, { useEffect, useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import Items from "./Items";

const List = (props) => {
  const [DataItem, setDataItem] = useState([]);
  useEffect(() => {
    const fetchGetDetail = async (idOrder) => {
      const filter = {
        idOrder: idOrder,
      };
      const res = await orderApi.GetOrderDetail(filter);
      setDataItem(res.data);
    };
    fetchGetDetail(props.idOrder);
  }, []);
  console.log(DataItem);
  return (
    <div>
      {DataItem.map((item) => (
        <Items
          idProduct={item.idProduct}
          quantity={item.quantity}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};

export default List;
