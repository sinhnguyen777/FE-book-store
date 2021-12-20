import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../Components/Common/FromControl/InputField/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FromAdminAdd = (props) => {
  const schema = yup
    .object({
      fullName: yup.string().required("Vui lòng nhập Họ và tên"),
      username: yup.string().required("Vui lòng nhập username"),
      password: yup
        .string()
        .matches(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
        .required("Vui lòng nhập password"),
      email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      name: yup.string().required("Vui lòng nhập chức vụ"),
    })
    .required();
  const forms = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      email: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>
      <div className="GroupFormList">
        <div className="GroupForm">
          <label htmlFor="fullName">Họ và Tên</label>
          <InputField name="fullName" type="text" form={forms}></InputField>
          <p className="CatchError">* {forms.errors.fullName?.message}</p>
        </div>
        <div className="GroupForm">
          <label htmlFor="username">Tài Khoản</label>
          <InputField name="username" type="text" form={forms}></InputField>
          {forms.errors.username && (
            <p className="CatchError">
              * Vui lòng nhập các ký tự trong bảng chữ cái
            </p>
          )}
        </div>
        <div className="GroupForm">
          <label htmlFor="password">Mật Khẩu</label>
          <InputField name="password" type="password" form={forms}></InputField>
          {forms.errors.password && (
            <p className="CatchError">
              <p>– Phải có ít nhất 8 ký tự</p>
              <p>– Ít nhất 1 ký tự đặc biệt từ @ # $% </p>
              <p>– Ít nhất 1 số, 1 chữ thường, 1 chữ hoa</p>
            </p>
          )}
        </div>

        <div className="GroupForm">
          <label htmlFor="email">Email</label>
          <InputField name="email" type="email" form={forms}></InputField>
          <p className="CatchError">* {forms.errors.email?.message}</p>
        </div>

        <div className="GroupForm">
          <label htmlFor="name">Chức vụ</label>
          <InputField name="name" type="text" form={forms}></InputField>
          <p className="CatchError">* {forms.errors.name?.message}</p>
        </div>
      </div>

      <Button style={{ width: "100px" }} htmlType="submit">
        Lưu
      </Button>
    </form>
  );
};

export default FromAdminAdd;
