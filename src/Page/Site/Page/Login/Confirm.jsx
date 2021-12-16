import { SyncOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import userApi from "../../../../api/userApi";

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
        const res = await userApi.verifyEmail(data);
        console.log(res.data.code);
        if (res.data.code === "200") {
          const dataLogin = {
            email: res.data.data.email,
            password: res.data.data.password,
          };
          console.log(dataLogin);
          const reslogin = await userApi.Login(dataLogin);
          if (reslogin.status === 200) {
            Swal.fire(
              "Xác Thực Thành Công",
              `Chào Mừng  đã đến với chúng tôi `,
              "success"
            );
            localStorage.setItem("user-info", JSON.stringify(reslogin.data));
            localStorage.setItem("token", reslogin.data.token);
            console.log(reslogin);
            history.push("/account");
          }
        }
        if (res.data.code === "404") {
          Swal.fire(
            "Tài Khoản Đã Được Xác Thực Trước Đó",
            "error"
          );
          history.push("/login");
        }
      } catch (err) {
        console.log(err);
        Swal.fire(
          "Xác Thực Thất Bại",
          `Bạn Xác Thực Email Trễ Mất Rồi :) cre jk`,
          "error"
        );
        history.push("/login");
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
