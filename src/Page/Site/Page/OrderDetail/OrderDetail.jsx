import { CaretDownOutlined, SyncOutlined } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import orderApi from "../../../../api/orderApi";
import ListItem from "./component/ListItem";

const OrderDetail = () => {
  const match = useRouteMatch();
  const [DataOrder, setDataOrder] = useState();
  useEffect(() => {
    const fetchGetOrder = async (id) => {
      const res = await orderApi.GetOrderById(id);
      console.log(res);
      setDataOrder(res.data);
    };

    fetchGetOrder(match.params.id);
  }, []);
  const showPro = useRef(null);
  const productToggle = () => showPro.current.classList.toggle("show");
  let history = useHistory();
  const handleCancel = async (id) => {
    try {
      const data = {
        id: id,
      };
      const res = await orderApi.Cancel(data);
      console.log(res);
      if (res.code === "404") {
        Swal.fire("Lỗi", "Bạn không thể hủy đơn hàng đã giao", "error");
      }

      if (res.code === "200") {
        Swal.fire("Hủy", "Hủy đơn thành công", "success");
        history.push('/')
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {DataOrder ? (
        <>
          <div className="orderdetail_banner">
            <div className="orderdetail_banner_title">
              <h6>Thông tin</h6>
              <h2>Chi tiết đơn hàng</h2>
            </div>
          </div>
          <div className="layout">
            <div className="orderdetail-content">
              <h2>Thông tin đơn hàng</h2>
              <div className="orderdetail-content_title">
                Khách hàng: {DataOrder.fullName}
              </div>
              <div className="orderdetail-content_phone">
                Số điện thoại: {DataOrder.phone}
              </div>
              <div className="orderdetail-content_address">
                Địa chỉ: {DataOrder.address}
              </div>
              {/* <div className="orderdetail-content_price">Giá : 100000</div> */}
              <div className="orderdetail-content_price">
                Trạng thái đơn hàng:{" "}
                {DataOrder.status ? `Đang Giao` : "Đang Chờ Xác Nhận"}
              </div>
              <div className="orderdetail-content_product">
                <h3 onClick={productToggle}>
                  Sản phẩm <CaretDownOutlined />
                </h3>
                <div ref={showPro} className="orderdetail-content_product_list">
                  <ListItem total={DataOrder.total} id={DataOrder._id} />
                </div>
                <button type="error" className="btn ButtonBanner" onClick={() => handleCancel(DataOrder._id)}>
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SyncOutlined spin />
      )}
    </>
  );
};

export default OrderDetail;
