import { Table } from "antd";
import React, { useEffect, useState } from "react";
import orderApi from "../../../../../api/orderApi";

const ListItem = (props) => {
  const [DataItem, setDataItem] = useState();
  useEffect(() => {
    const fetchGetDetail = async (id) => {
      const filter = {
        idOrder: id,
      };
      const res = await orderApi.GetOrderDetail(filter);
      setDataItem(res.data);
    };
    fetchGetDetail(props.id);
  }, []);
  const columns = [
    {
      title: "Hình",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <Table dataSource={DataItem} columns={columns} />;
      {/* <table className="orderdetail-content_product_list_table">
                 <tbody>
                   <tr>
                     <th>
                       <Image
                         width={100}
                         src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg"
                       />
                     </th>
                     <td>:) :) :)</td>
                     <td>000 đ</td>
                     <td>1</td>
                   </tr>
                   <tr>
                     <th>
                       <Image
                         width={100}
                         src="https://kenh14cdn.com/203336854389633024/2021/11/11/2545480766251655485000658965182106882304688n-16366293619091765901198.jpg"
                       />
                     </th>
                     <td>asdas</td>
                     <td>000 đ</td>
                     <td>2</td>
                   </tr>
                 </tbody>
               </table> */}
    </div>
  );
};

export default ListItem;
