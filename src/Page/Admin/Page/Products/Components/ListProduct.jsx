import { Button, Image, Table } from 'antd';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import prouctApi from '../../../../../api/productApi';

const ListProduct = (props) => {


  const handleDelProduct = async (id)=>{
    try {

      await prouctApi.DelProducts(id);

        Swal.fire('...', 'Xóa Thành Công!', 'success').then((result) => {
                if (result.isConfirmed) {
                    props.handleRender();
                }
            })
    } catch (error) {
      console.log(error);
      Swal.fire('...', 'Xóa Thất Bại!', 'error')
    }
  }

  const columns = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'nameProduct',
      key: 'nameProduct',
    },
    {
      title: 'hình',
      dataIndex: 'images',
      key: 'images',
      render: (record) => {
        return <>
          <Image
            width={50}
            src={`https://beonlinelibrary.herokuapp.com/${record[0].image}`}
          />
        </>
      },
    },
    {
      title: 'Tác giả',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Nhà xuất bản',
      dataIndex: 'nxb',
      key: 'nxb',
    },
    {
      title: 'giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Chương',
      key: 'chapter',
      render: (record) => {
        return <>
          <Button><Link to={`/admin/products/Listchapter/${record._id}`}>Xem Chương ...</Link></Button>
        </>
      },
    },

    {
      title: 'sửa',
      key: 'edit',
      render: (record) => {
        return <>
          <Button><Link to={`/admin/products/edit/${record._id}`}>Sửa</Link></Button>
        </>
      },
    },

    {
      title: 'xóa',
      key: 'edit',
      render: (record) => {
        return <>
          <Button onClick={() =>handleDelProduct(record._id)}>Xóa</Button>
        </>
      },
    },
  ];

  return (
    <>
      <Table dataSource={props.data} columns={columns}/>;
    </>
  );
}



export default ListProduct