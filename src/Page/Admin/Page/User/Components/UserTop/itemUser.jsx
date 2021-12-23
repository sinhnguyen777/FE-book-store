import React, { useState } from "react";
import { Button, Image, Modal, Table } from "antd";
import ListCouponSend from "./listCoupon";

const ItemUser = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" ghost onClick={() => setVisible(true)}>
        Gửi mã giảm giá
      </Button>
      <Modal
        key={props.record._id[0]._id}
        title="Danh sách mã giảm giá"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <ListCouponSend id={props.record._id[0]._id} />
      </Modal>
    </>
  );
};

export default ItemUser;
