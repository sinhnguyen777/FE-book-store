import { Image, Tabs} from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

const Order = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tất cả" key="1">
          <div className="orderdetail-content_product_list InforOrder">
            <table className="orderdetail-content_product_list_table">
              <tbody>
                <tr>
                  <th>
                    <Image
                      width={100}
                      src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg"
                    />
                  </th>
                  <td><Link to='/'>:) :) :)</Link></td>
                  <td>000 đ</td>
                  <td>x1</td>
                </tr>
                <tr>
                  <th>
                    <Image
                      width={100}
                      src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg"
                    />
                  </th>
                  <td>:) :) :)</td>
                  <td>000 đ</td>
                  <td>x2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPane>
        <TabPane tab="Chờ xác nhận" key="2">
          lan
        </TabPane>
        <TabPane tab="Đã giao" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Đã hủy" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </>
  );
};

export default Order;
