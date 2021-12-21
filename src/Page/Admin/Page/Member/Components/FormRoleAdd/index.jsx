import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../Components/Common/FromControl/InputField/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import roleApi from "../../../../../../api/roleApi";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import adminApi from "../../../../../../api/adminApi";

const { Option } = Select;

const FromAdminAdd = () => {
  const [demo, setdemo] = useState("");

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
    })
    .required();
  const forms = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      email: "",
      role: "",
    },
    resolver: yupResolver(schema),
  });
  const [RoleValue, setRoleValue] = useState([]);
  useEffect(() => {
    const fetchRole = async () => {
      const res = await roleApi.GetRole();
      setRoleValue(res.data);
    };
    fetchRole();
  }, [demo]);

  const [ValueSelect, setValueSelect] = useState("");

  function handleChange(value) {
    setValueSelect(value);
  }
  let history = useHistory();
  const handleSubmitFrom = (values) => {
    const fetchUpdateRole = async (data) => {
      try {
        values.idRole = ValueSelect;

        const res = await adminApi.Register(data);
        if (res.status === 200) {
          Swal.fire("...", "Thêm Thành Công!", "success").then((result) => {
            if (result.isConfirmed) {
              setdemo((pre) => pre + 1);
              setValueSelect("");

              forms.reset({
                defaultValues: {
                  fullName: "",
                  username: "",
                  password: "",
                  email: "",
                  role: "",
                },
              });

              history.push({ pathname: "/admin/Member" });
            }
          });
        }

      } catch (err) {
        Swal.fire("Lỗi", "Chức vụ đã có trong danh sách", "error");
      }
    };

    fetchUpdateRole(values);
  };
  return (
    <form onSubmit={forms.handleSubmit(handleSubmitFrom)}>
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
          <label htmlFor="role">Chức vụ</label>
          <Select
            name="role"
            form={forms}
            className="MemberRoleSelect"
            onChange={handleChange}
          >
            {RoleValue
              ? RoleValue.map((item) => (
                  <Option key={item._id} value={item._id}>
                    {item.name}
                  </Option>
                ))
              : ""}
          </Select>
        </div>
      </div>

      <Button style={{ width: "100px" }} htmlType="submit">
        Lưu
      </Button>
    </form>
  );
};

export default FromAdminAdd;
