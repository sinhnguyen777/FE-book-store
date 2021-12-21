import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import adminApi from "../../../../api/adminApi";

const BoxForgot = (props) => {
  const form = useForm();

  const handleForgot = async (values) => {
    try {
      const data = {};
      data.email = values.email;
      console.log(values);
      await adminApi.SendMail(data);
      Swal.fire({
        title: "Đã gửi mã xác thực vào email của bạn",
        text: "Bạn có muốn chuyển đến trang Email của mình để xác thực tài khoản không ?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "chuyển đến Email",
        cancelButtonText: "ở lại trang này",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = "https://mail.google.com/mail/u/0/";
        }
      });
      // Swal.fire('Đã gửi mã xác thực', `vui lòng vào hộp mail của mình để xác thực tài khoản `, 'success');
    } catch (err) {
      Swal.fire("Email không tồn tại", "error");
      console.log(err);
    }
  };

  return (
    <div className="user signupBx">
      <div className="formBx">
        <form onSubmit={form.handleSubmit(handleForgot)}>
          <h2>Quên Mật Khẩu</h2>
          <input
            type="email"
            name="email"
            id
            placeholder="Nhập Email"
            ref={form.register({ required: true })}
          />
          {form.errors.email && <p className="CatchError">* Vui lòng nhập email</p>}
          <button type="submit">Lấy Lại Mật Khẩu</button>
          <p className="signup">
            Bạn Đã Có Tài Khoản ?{" "}
            <span onClick={props.toggleForm}>Đăng Nhập.</span>
          </p>
        </form>
      </div>
      <div className="imgBx">
        <img src={props.logout} alt="" />
      </div>
    </div>
  );
};

export default BoxForgot;
