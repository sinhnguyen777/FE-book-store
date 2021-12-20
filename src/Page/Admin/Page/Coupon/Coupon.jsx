import { Button, Col, PageHeader, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import couponApi from "../../../../api/couponApi";
import InputField from "../../Components/Common/FromControl/InputField";
import ListCoupon from "./Components/ListCoupon";

const Coupon = () => {
    const [demo, setdemo] = useState("");
    const [DataCata, setDataCata] = useState([]);
    const forms = useForm({
      defaultValues: {
          code: '',
          percent: '',
      },
      });
    let history = useHistory();
  
    const handleSubmitFrom = (values) => {
      const fetchUpdateCata = async (data) => {
        try {
          const res = await couponApi.AddCoupon(data);
          if (res.status === 200) {
            Swal.fire("Thêm", "Thêm Thành Công!", "success").then((result) => {
              if (result.isConfirmed) {
                setdemo((pre) => pre + 1);
                  forms.reset({ 
                    defaultValues: {
                        code: '',
                        percent: '',
                    },
                  });
  
                history.push({ pathname: "/admin/coupon" });
              }
            });
          }
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchUpdateCata(values);
    };
  
    const handleRemove = (id) => {
      try {
        const fetchRemoveCata = async (data) => {
          try {
            const res = await couponApi.DelCoupon(data);
            if (res.status === 200) {
              Swal.fire("XÓA", "Xóa Thành Công!", "success").then((result) => {
                if (result.isConfirmed) {
                  setdemo((pre) => pre + 1);
                  history.push({ pathname: "/admin/coupon" });
                }
              });
            }
          } catch (err) {
            console.log(err);
            Swal.fire("Rất tiếc!", "Không đủ Thẩm quyền đề xóa", "error").then(
              (result) => {
                if (result.isConfirmed) {
                  setdemo((pre) => pre + 1);
                  history.push({ pathname: "/admin/coupon" });
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
        const res = await couponApi.GetCoupon();
        setDataCata(res);
      };
  
      fetchCata();
    }, [demo]);
  return (
    <div className="CatalogsPage">
      <PageHeader className="site-page-header" title="Trang Quản lý mã giảm giá" />

      <div className="BoxForm">
        <div className="title">Thêm mã giảm giá</div>
        <form onSubmit={forms.handleSubmit(handleSubmitFrom)}>
          <div className="GroupForm">
            <label htmlFor="code">Mã code</label>
            <InputField name="code" type="text" form={forms}></InputField>
          </div>
          <div className="GroupForm">
            <label htmlFor="percent">Số tiền giảm</label>
            <InputField name="percent" type="text" form={forms}></InputField>
          </div>
          <Button htmlType="submit">Lưu</Button>
        </form>
      </div>

      <Row className="ListCata">
        <Col span={24}>
          <ListCoupon data={DataCata.data} handleRemove={handleRemove} />
        </Col>
      </Row>
    </div>
  );
};

export default Coupon;
