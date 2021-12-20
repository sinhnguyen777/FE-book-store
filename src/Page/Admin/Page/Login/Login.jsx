import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import adminApi from "../../../../api/adminApi";
import login from "../../../../Assets/Images/Admin/bg1.jpg";
import logout from "../../../../Assets/Images/Admin/bg2.jpg";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import BoxForgot from "./boxForgot";

const LoginAd = () => {
  const [show, setshow] = useState(false);
  const form = useForm();

  const toggleForm = () => {
    setshow(!show);
  };
  let history = useHistory();

  const setUserSession = (token, data) => {
    localStorage.setItem("token", token);
    localStorage.setItem("admin", JSON.stringify(data));
  };

  const handleLogin = async (values) => {
    try {
      const data = {};
      data.username = values.username;
      data.password = values.password;
      console.log(data);
      const res = await adminApi.LoginAdmin(data);
      console.log(res);
      Swal.fire(
        "Đăng Nhập Thành Công",
        `Chào Mừng ${res.data.data[0].fullName} đên với trang quản trị `,
        "success"
      );
      setUserSession(res.data.token, res.data.data[0]);
      history.push("/admin");
      console.log(res.data.data[0].fullName);
    } catch (err) {
      Swal.fire(
        "Đăng Nhập Thất Bại",
        "Tên đăng nhập hoặc mật khẩu không chính xác vui lòng kiểm tra lại",
        "error"
      );
      console.log(err);
    }
  };

  return (
    <div className="BoxContent">
      <section>
        <div className={show ? "container active" : "container"}>
          <div className="user signinBx">
            <div className="imgBx">
              <img src={login} alt="" />
            </div>
            <div className="formBx">
              <form onSubmit={form.handleSubmit(handleLogin)}>
                <h2>Đăng Nhập</h2>
                <input
                  type="text"
                  name="username"
                  id
                  placeholder="Username"
                  ref={form.register({
                    required: true,
                  })}
                />
                {form.errors.username && (
                  <p className="CatchError">
                    * Vui lòng nhập các ký tự trong bảng chữ cái
                  </p>
                )}
                <input
                  type="password"
                  name="password"
                  id
                  placeholder="Password"
                  ref={form.register({ required: true })}
                />
                {form.errors.password && (
                  <p className="CatchError">* Vui lòng nhập password</p>
                )}
                <button type="submit">Đăng Nhập</button>
                <p className="signup">
                  Bạn Quên Mật Khẩu?{" "}
                  <span onClick={toggleForm}>Lấy Lại Mật Khẩu.</span>
                </p>
              </form>
            </div>
          </div>

          <BoxForgot toggleForm={toggleForm} logout={logout} />
        </div>
      </section>
    </div>
  );
};

export default LoginAd;
