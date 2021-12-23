import { Button, Table } from 'antd';
import React from "react";
import { Link } from "react-router-dom";

const ListPermission = (props) => {
  const columns = [
    {
      title: 'Quyền',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sửa',
      key: 'edit',
      render: (record) => {
        return <>
          <Button><Link to={`/admin/permission/edit/${record._id}`}>Sửa</Link></Button>
        </>
      },
    },
    
  ];
  return (
    <>
      <Table dataSource={props.data} columns={columns}/>
    </>
  );
}

export default ListPermission