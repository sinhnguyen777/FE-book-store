import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Button } from "antd";
import ListCata from "./Components/ListCata";
import FromCataAdd from "./Components/FormCataAdd";
import cataApi from "../../../../api/cataApi";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import InputField from "../../Components/Common/FromControl/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CatalogPage = () => {
  const [demo, setdemo] = useState("");
  const [DataCata, setDataCata] = useState([]);
  const schema = yup
    .object({
      nameCata: yup.string().required("Vui lòng nhập trường này"),
    })
    .required();
  const forms = useForm({
    defaultValues: {
      nameCata: "",
    },
    resolver: yupResolver(schema),
  });
  let history = useHistory();

  const handleSubmitFrom = (values) => {
    const fetchUpdateCata = async (data) => {
      try {
        const res = await cataApi.AddCata(data);
        console.log(res);
        if (res.data.code === '200') {
          Swal.fire("Thêm", "Thêm Thành Công!", "success").then((result) => {
            if (result.isConfirmed) {
              console.log(1);
              setdemo((pre) => pre + 1);
              forms.reset({
                defaultValues: {
                  nameCata: "",
                },
              });

              history.push({ pathname: "/admin/cata" });
            }
          });
        }
        if (res.data.code === 404) {
          Swal.fire(
            "Không thể thêm",
            "Danh mục này đã có trong danh sách",
            "error"
          ).then((result) => {
            if (result.isConfirmed) {
              console.log(1);
              setdemo((pre) => pre + 1);
              forms.reset({
                defaultValues: {
                  nameCata: "",
                },
              });

              history.push({ pathname: "/admin/cata" });
            }
          });
        }
        if (res.data.status === 403) {
          Swal.fire(
            "Không thể thêm",
            "Không đủ thẩm quyền để thêm",
            "error"
          ).then((result) => {
            if (result.isConfirmed) {
              console.log(1);
              setdemo((pre) => pre + 1);
              forms.reset({
                defaultValues: {
                  nameCata: "",
                },
              });

              history.push({ pathname: "/admin/cata" });
            }
          });
        }
      } catch (err) {
        Swal.fire(
          "Không thể thêm",
          "Danh mục này đã có trong danh sách",
          "error"
        );
      }
    };

    fetchUpdateCata(values);
  };

  const handleRemove = (id) => {
    try {
      const fetchRemoveCata = async (data) => {
        try {
          const res = await cataApi.DelCata(data);
          console.log(res);
          if (res.data.code === '200') {
            Swal.fire("...", "Xóa Thành Công!", "success").then((result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/cata" });
              }
            });
          }
           if (res.data.status === 403) {
            Swal.fire("...", "Không đủ thẩm quyền để xóa", "error")
          }
        } catch (err) {
          console.log(err);
          Swal.fire("...", "Lỗi Rồi", "error").then(
            (result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/cata" });
              }
            }
          );
        }
      };

      fetchRemoveCata(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCata = async () => {
      const res = await cataApi.GetCata();
      setDataCata(res);
    };

    fetchCata();
  }, [demo]);

  return (
    <div className="CatalogsPage">
      <PageHeader className="site-page-header" title="Trang Danh mục" />

      <div className="BoxForm">
        <div className="title">Thêm Danh Mục</div>
        {/* <FromCataAdd handleSubmitFrom={handleSubmitFrom} /> */}
        <form onSubmit={forms.handleSubmit(handleSubmitFrom)}>
          <div className="GroupForm">
            <label htmlFor="nameCata">Tên Danh mục</label>
            <InputField name="nameCata" type="text" form={forms}></InputField>
            {forms.errors.nameCata && (
              <p className="CatchError">* Vui lòng nhập trường này</p>
            )}
          </div>

          <Button htmlType="submit">Lưu</Button>
        </form>
      </div>

      <Row className="ListCata">
        <Col span={24}>
          <ListCata data={DataCata.data} handleRemove={handleRemove} />
        </Col>
      </Row>
    </div>
  );
};

export default CatalogPage;
