import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Button } from "antd";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import vipApi from "../../../../api/vipApi";
import ListVip from "./Components/ListVip";
import FormVipAdd from "./Components/FormVipAdd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputField from "../../Components/Common/FromControl/InputField";
const Vip = () => {
  const [demo, setdemo] = useState("");
  const [DataVip, setDataVip] = useState([]);
  const schema = yup
  .object({
    name: yup.string().required("Vui lòng nhập trường này"),
    price: yup.string().required("Vui lòng nhập trường này"),
    time: yup.string().required("Vui lòng nhập trường này"),
  })
  .required();
  const forms = useForm({
    defaultValues: {
        name: '',
        price: '',
        time: '',
    },
    resolver: yupResolver(schema),
});
  let history = useHistory();

  const handleSubmitFrom = (values) => {
    const fetchUpdateVip = async (data) => {
      try {
        const res = await vipApi.AddVip(data);
        if (res.status === 200) {
          Swal.fire("Thêm", "Thêm Thành Công!", "success").then((result) => {
            if (result.isConfirmed) {
              setdemo((pre) => pre + 1);
              history.push({ pathname: "/admin/vip" });
            }
          });
        }
        if (res.data.code === 404) {
            Swal.fire(
              "Không thể thêm",
              "Dịch vụ này đã có trong danh sách",
              "error"
            )
           
          }
      } catch (err) {
        Swal.fire(
          "Không thể thêm",
          "Mã dịch vụ đã có trong danh sách",
          "error"
        );
      }
    };

    fetchUpdateVip(values);
  };

  const handleRemove = (id) => {
    try {
      const fetchRemoveVip = async (data) => {
        try {
          const res = await vipApi.DelVip(data);
          if (res.status === 200) {
            Swal.fire("Xóa", "Xóa Thành Công!", "success").then((result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/vip" });
              }
            });
          }
          
        } catch (err) {
          console.log(err);
          Swal.fire("Lỗi", "Không đủ Thẩm quyền đề xóa", "error").then(
            (result) => {
              if (result.isConfirmed) {
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/vip" });
              }
            }
          );
        }
      };

      fetchRemoveVip(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchVip = async () => {
      const res = await vipApi.GetVip();
      setDataVip(res);
    };

    fetchVip();
  }, [demo]);

  return (
    <div className="CatalogsPage">
      <PageHeader className="site-page-header" title="Trang Gói VIP" />

    

      <Row className="ListCata">
        <Col span={24}>
          <ListVip data={DataVip.data} handleRemove={handleRemove} />
        </Col>
      </Row>
    </div>
  );
};

export default Vip;
