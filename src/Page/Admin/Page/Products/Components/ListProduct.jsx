import { Button, Table } from 'antd';
import React from "react";
import { Link } from "react-router-dom";

const ListProduct = (props) => {
  const columns = [
    {
      title: 'Sách',
      dataIndex: 'nameCata',
      key: 'nameCata',
    },
    {
      title: 'Sửa',
      key: 'edit',
      render: (record) => {
        return <>
          <Button><Link to={`/admin/cata/edit/${record._id}`}>Sửa</Link></Button>
        </>
      },
    },
    {
      title: 'Xóa',
      key: 'del',
      render: (record) => (
        <Button onClick={()=>props.handleRemove(record._id)}>Xóa</Button>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={props.data} columns={columns} />
    </>
  );
}

export default ListProduct