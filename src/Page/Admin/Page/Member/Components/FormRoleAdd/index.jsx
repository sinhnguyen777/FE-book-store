import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../Components/Common/FromControl/InputField/index";

const FromAdminAdd = (props) => {
  const forms = useForm({
    defaultValues: {
      name: "",
    },
  });

  return (
    <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>
      <div className="GroupFormList">
        <div className="GroupForm">
          <label htmlFor="name">Họ và Tên</label>
          <InputField name="name" type="text" form={forms}></InputField>
        </div>
        <div className="GroupForm">
          <label htmlFor="name">Tài Khoản</label>
          <InputField name="name" type="text" form={forms}></InputField>
        </div>
        <div className="GroupForm">
          <label htmlFor="name">Mật Khẩu</label>
          <InputField name="name" type="text" form={forms}></InputField>
        </div>

        <div className="GroupForm">
          <label htmlFor="name">Email</label>
          <InputField name="name" type="text" form={forms}></InputField>
        </div>

        <div className="GroupForm">
          <label htmlFor="name">Chức vụ</label>
          <InputField name="name" type="text" form={forms}></InputField>
        </div>
      </div>

      <Button style={{width: '100px'}} htmlType="submit">Lưu</Button>
    </form>
  );
};

export default FromAdminAdd;
