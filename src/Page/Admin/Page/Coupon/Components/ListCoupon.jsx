import { Button, Table, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ListCoupon = (props) => {
  const columns = [
    {
      title: "Mã giảm",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Số tiền giảm",
      key: "percent",
      render: (record) => {
        return (
          <>
            {record.percent.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      },
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (record) => {
        return (
          <>
            {record.status === true ? (
              <Tag color="success">Coupon đã được gửi</Tag>
            ) : (
              <Tag color="processing">Coupon chưa được gửi</Tag>
            )}
          </>
        );
      },
    },
    {
      title: "Sửa",
      key: "edit",
      render: (record) => {
        return (
          <>
            <Button>
              <Link to={`/admin/coupon/edit/${record._id}`}>Sửa</Link>
            </Button>
          </>
        );
      },
    },
    {
      title: "Xóa",
      key: "del",
      render: (record) => (
        <Button onClick={() => props.handleRemove(record._id)}>Xóa</Button>
      ),
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

export default ListCoupon;
