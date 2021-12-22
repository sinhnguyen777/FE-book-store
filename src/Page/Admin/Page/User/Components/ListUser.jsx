import {  Image, Select, Table } from "antd";
import React from "react";

const ListUser = (props) => {
 console.log(props.data);
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Avatar",
      key: "avatar",
      render: (record) => (
        <>
          <Image
            width={70}
            src={`https://beonlinelibrary.herokuapp.com/${record.avatar}`}
          />
        </>
      ),
    },
    {
      title: "Gói dịch vụ",
      dataIndex: "vip",
      key: "vip",
    },
    
  ];
  return (
    <div>
      <Table dataSource={props.data} columns={columns} />
    </div>
  );
};

export default ListUser;
