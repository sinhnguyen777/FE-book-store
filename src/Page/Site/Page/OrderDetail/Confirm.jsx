import { SyncOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import orderApi from "../../../../api/orderApi";

const Confirm = () => {
  const match = useRouteMatch();
  const history = useHistory();
  console.log(match.params.token);
  useEffect(() => {
    const fetchVerify = async (token) => {
      try {
        const data = {
          token: token,
        };
        const res = await orderApi.verifyOrder(data);
        Swal.fire(
          "Xác Thực Thành Công",
          `Cám ơn bạn đã xác nhận đơn hàng, Chúng tôi sẽ cố gắng giao hàng sớm nhất tới cho bạn`,
          "success"
        );
        history.push(`/order-detail/${res.data.id}`);
      } catch (err) {
        console.log(err);
        Swal.fire(
          "Xác Thực Thất Bại",
          `Đã quá thời hạn xác thực đơn hàng chúng tôi rất tiếc phải báo với bạn đơn hàng của bạn đã bị hủy 😭😭😭😭😭😭😭`,
          "error"
        );
        // history.push("/login");
      }
    };

    fetchVerify(match.params.token);
  }, []);
  return (
    <div className="confirm">
      <div className="error-container">
        <h2>Đang Xác thực tài khoản</h2>
        <SyncOutlined spin />
      </div>
    </div>
  );
};

export default Confirm;
