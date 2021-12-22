import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router";
import Swal from "sweetalert2";
import adminApi from "../../../../api/adminApi";
import login from "../../../../Assets/Images/Admin/bg1.jpg";

const ResetPass = () => {
  const form = useForm();

  let history = useHistory();
  const match = useRouteMatch();

  const handleLogin = async (values) => {
    try {
      values.token = match.params.token;
      console.log(values);
      const res = await adminApi.NewPass(values);
      // console.log(res);
      Swal.fire("Đổi mật khẩu thành công", `Đăng nhập để tiếp tục`, "success");
      history.push("/admins/login");
    } catch (err) {
      console.log(1);
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
        <div className={"container"}>
          <div className="user signinBx">
            <div className="imgBx">
              <img src={login} alt="" />
            </div>
            <div className="formBx">
              <form onSubmit={form.handleSubmit(handleLogin)}>
                <h2>Nhập Mật Khẩu Mới</h2>
                <input
                  type="password"
                  name="password"
                  id
                  placeholder="Password"
                  ref={form.register({required: true,pattern:/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/})}
                />
                {form.errors.password && 
                    <p className="CatchError">
                        <p>– Phải có ít nhất 8 ký tự</p>
                        <p>– Ít nhất 1 ký tự đặc biệt từ @ # $% </p>
                        <p>– Ít nhất 1 số, 1 chữ thường, 1 chữ hoa</p>
                    </p>
                }

                <button type="submit">Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPass;
