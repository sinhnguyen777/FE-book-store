import { Button, Image, Modal, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemUser from "./itemUser";
import ListCouponSend from "./listCoupon";

const ListUserTop = (props) => {
  console.log(props.data);
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: "Tên Khách Hàng",
      key: "nameCata",
      render: (record) => {
        return <p>{record._id[0].fullName}</p>;
      },
    },

    {
      title: "Avata",
      key: "avata",
      render: (record) => {
        return (
          <Image
            width={70}
            src={`https://beonlinelibrary.herokuapp.com/${record._id[0].avatar}`}
          />
        );
      },
    },
    {
      title: "Số lượng mua",
      key: "total",
      render: (record) => {
        return <>{record.Total}</>;
      },
    },
    {
      title: "Gửi mã giảm giá",
      key: "email",
      render: (record) => {
        return <ItemUser record={record}></ItemUser>;
      },
    },
  ];
  return (
    <>
      <Table
        className="ListCataTable"
        dataSource={props.data}
        columns={columns}
      />
    </>
  );
};

export default ListUserTop;
