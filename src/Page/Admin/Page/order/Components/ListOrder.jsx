import { Button, Table, Tag } from "antd";
import { LogarithmicScale } from "chart.js";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import orderApi from "../../../../../api/orderApi";

const ListOrder = (props) => {
  const handleSend = async (id) => {
    try {
      const data = {
        id: id,
      };
      const res = await orderApi.Send(data);
      console.log(res);
      if (res.code === "404") {
        Swal.fire("...", "Không thể giao đơn đã hủy", "error");
      }

      if (res.code === "200") {
        Swal.fire("...", "Giao đợn hàng thành công", "success");
        props.handleSetRender();
      }
      if(res.status === 403){
        Swal.fire("...", "Không đủ thẩm quyền để giao", "error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "fullName",
      key: "fullName",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (record) => {
        console.log(record);
        return (
          <>
            <div>
              {record.status === true ? (
                <Tag color="success">Đã giao hàng</Tag>
              ) : (
                <Tag color="processing">Đang chờ xác nhận</Tag>
              )}
            </div>
          </>
        );
      },
    },
    {
      title: "Thong tin",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Hủy",
      key: "cancel",
      render: (record) => {
        return (
          <>
            <div>
              {record.cancel === true ? <Tag color="red">Đã hủy</Tag> : ""}
            </div>
          </>
        );
      },
    },
    {
      title: "Chi tiết",
      key: "detail",
      render: (record) => {
        return (
          <>
            <Button>
              <Link to={`/side/order-detail/${record._id}`}>Chi tiết...</Link>
            </Button>
          </>
        );
      },
    },
    {
      title: "Gửi",
      key: "send",
      render: (record) => {
        return (
          <>
            {record.status === true ? (
              <Button disabled>Đã Giao Hàng</Button>
            ) : (
              <Button onClick={() => handleSend(record._id)}>Giao Hàng</Button>
            )}
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={props.data} columns={columns}/>
    </>
  );
};

export default ListOrder;
