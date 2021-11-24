import { Button, Table } from 'antd';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cataApi from "../../../../../api/cataApi";

const ListCata = (props) => {
  const columns = [
    {
      title: 'Danh mục',
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

export default ListCata