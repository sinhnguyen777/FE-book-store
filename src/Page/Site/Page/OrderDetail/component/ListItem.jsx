import { Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import orderApi from "../../../../../api/orderApi";
import prouctApi from "../../../../../api/productApi";

const ListItem = (props) => {
  const [DataItem, setDataItem] = useState([]);
  
  useEffect(() => {
    const fetchGetDetail = async (id) => {
      const filter = {
        idOrder: id,
      };
      const res = await orderApi.GetOrderDetail(filter);
      await res.data.map( async (item)=>{
        const data = {...item}
        const res = await prouctApi.GetProductsById(item.idProduct);
        data.images = res.data.images;
        data.name = res.data.nameProduct;
        const value = [...DataItem ]
        console.log(value);
        value.push(data)
        setDataItem(value)
        console.log(value);
      })
      // setDataItem(newData)
    };
    fetchGetDetail(props.id);
  }, []);
console.log(DataItem.price);
  const columns = [
    {
      title: "Hình",
      dataIndex: "images",
      key: "images",
      render: (record) => {
        console.log(record);
        return <>
          <Image width={70} src={`https://beonlinelibrary.herokuapp.com/${record[0].image}`}alt="" />
        </>
      }
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <div>
      {/* {console.log(DataItem)} */}
      <Table columns={columns} dataSource={DataItem} />
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
               Tổng : {DataItem.map(item => (
                 <>
                  {(item.price*item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                 </>
               ))}
    </div>
  );
};

export default ListItem;
