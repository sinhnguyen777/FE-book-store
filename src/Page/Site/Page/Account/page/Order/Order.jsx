import { Tabs } from "antd";
import React from "react";
import ListItemOrder from "./Component/ListItemOrder";
import ListItemOrderPending from "./Component/ListItemOrderPending";
import ListOrderCancel from "./Component/ListOrderCancel";
import ListOrderShipping from "./Component/ListOrderShipping";

const { TabPane } = Tabs;

const Order = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tất cả" key="1">
          {<ListItemOrder /> || "Chưa đặt đơn hàng nào"}
        </TabPane>
        <TabPane tab="Chờ xác nhận" key="2">
          {<ListItemOrderPending /> || "Chưa có đơn hàng chờ xác nhận"}
        </TabPane>
        <TabPane tab="Đang giao" key="3">
          {<ListOrderShipping /> || "Chưa có đơn hàng đang giao"}
        </TabPane>
        <TabPane tab="Đã hủy" key="4">
          {<ListOrderCancel /> || "Chưa hủy đơn hàng nào"}
        </TabPane>
      </Tabs>
    </>
  );
};

export default Order;
