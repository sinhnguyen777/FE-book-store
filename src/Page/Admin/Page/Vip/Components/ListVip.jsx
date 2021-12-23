import { Button, Table } from 'antd';
import React from "react";
import { Link } from "react-router-dom";

const ListVip = (props) => {
  const columns = [
    {
      title: 'Gói VIP',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá gói',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Thời gian hết hạn',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Sửa',
      key: 'edit',
      render: (record) => {
        return <>
          <Button><Link to={`/admin/vip/edit/${record._id}`}>Sửa</Link></Button>
        </>
      },
    },
   
  ];

  return (
    <>
      <Table dataSource={props.data} columns={columns} />
    </>
  );
}

export default ListVip