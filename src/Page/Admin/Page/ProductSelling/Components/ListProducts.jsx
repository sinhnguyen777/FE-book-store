import { Image, Table } from "antd";
import React from "react";
const ListProducts = (props) => {
  const columns = [
    {
      title: "Tên Sản phẩm",
      key: "nameProduct",
      render: (record) => {
        return <p>{record._id[0].nameProduct}</p>;
      },
    },

    {
      title: "Hình",
      key: "images",
      render: (record) => {
        console.log(record);
        return (
          <Image
            width={70}
            src={`https://beonlinelibrary.herokuapp.com/${record._id[0].images[0].image}`}
          />
        );
      },
    },
    {
      title: "Giá",
      key: "price",
      render: (record) => {
        return <p>{record._id[0].price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>;
      },
    },
    {
      title: "Tác giả",
      key: "author",
      render: (record) => {
        return <p>{record._id[0].author}</p>;
      },
    },
    {
      title: "Nhà xuất bản",
      key: "nxb",
      render: (record) => {
        return <p>{record._id[0].nxb}</p>;
      },
    },
    
    {
      title: "Đã bán",
      key: "total",
      render: (record) => {
        return <>{record.Total}</>;
      },
    }
  ];
  return (<>
    <Table
      className="ListCataTable"
      dataSource={props.data}
      columns={columns}
    />
  </>);
};

export default ListProducts;
