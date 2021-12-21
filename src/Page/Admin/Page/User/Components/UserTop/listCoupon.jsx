import { Button, List } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import couponApi from "../../../../../../api/couponApi";

const ListCouponSend = (props) => {
  const [DataCoupon, setDataCoupon] = useState();
  const [Render, setRender] = useState(0)
  useEffect(() => {
    const fetchGetCoupons = async () => {
      const res = await couponApi.GetCoupon();
      setDataCoupon(res.data);
    };

    fetchGetCoupons();
  }, [Render]);
  console.log(DataCoupon);
  const handleSubmitFrom = async (value) => {
    try {
      const data = {
        idCoupon: value,
        idUser: props.id,
      };

      const res = await couponApi.SendCoupon(data);
      if (res.status === 200) {
        Swal.fire("Gửi Thành Công", "success");
        setRender(Render+1)
      }
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(props.id);

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={DataCoupon}
      renderItem={(item) => (
        <List.Item
          actions={[
            item.status ? (
              <Button disabled>Mã Đã Được Gửi</Button>
            ) : (
              <Button onClick={() => handleSubmitFrom(item._id)}> Gửi</Button>
            ),
          ]}
        >
          <div>{item.code}</div>
          <div>
            {item.percent.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListCouponSend;
