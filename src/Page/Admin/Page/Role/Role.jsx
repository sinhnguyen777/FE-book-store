import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Button } from "antd";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import roleApi from "../../../../api/roleApi";
import FromRoleAdd from "./Components/FormRoleAdd";
import ListRole from "./Components/ListRole";
import InputField from "../../Components/Common/FromControl/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Role = () => {
  const [demo, setdemo] = useState("");
  const [DataRole, setDataRole] = useState([]);
  const schema = yup
  .object({
    name: yup.string().required("Vui lòng nhập trường này"),
  })
  .required();
  const forms = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),

  });
  let history = useHistory();
  const handleSubmitFrom = (values) => {
    const fetchUpdateRole = async (data) => {
      try {
        const res = await roleApi.AddRole(data);
        if (res.status === 200) {
          Swal.fire("Thêm chức vụ", "Thêm Thành Công!", "success").then(
            (result) => {
              if (result.isConfirmed) {
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/role" });
              }
            }
          );
        }
      } catch (err) {
        Swal.fire("Không thể thêm", "Chức vụ đã có trong danh sách", "error");
      }
    };

    fetchUpdateRole(values);
  };

  useEffect(() => {
    const fetchRole = async () => {
      const res = await roleApi.GetRole();
      setDataRole(res);
    };

    fetchRole();
  }, [demo]);

  return (
    <div className="CatalogsPage">
      <PageHeader className="site-page-header" title="Trang chức vụ" />

      <div className="BoxForm">
        <div className="title">Thêm chức vụ</div>
        <form onSubmit={forms.handleSubmit(handleSubmitFrom)}>
          <div className="GroupForm">
            <label htmlFor="name">Chức vụ</label>
            <InputField name="name" type="text" form={forms}></InputField>
            {forms.errors.name && (
              <p className="CatchError">* Vui lòng nhập trường này</p>
            )}
          </div>

          <Button htmlType="submit">Lưu</Button>
        </form>
      </div>

      <Row className="ListCata">
        <Col span={24}>
          <ListRole data={DataRole.data} />
        </Col>
      </Row>
    </div>
  );
};

export default Role;
