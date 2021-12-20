import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Item from './Item'
const ListProducts = (props) => {
  const data = props.data;
 
  return <>{data ? data.map((item) => <><Item id={item._id}/> <br></br></>) : <LoadingOutlined />}</>;
};

export default ListProducts;
