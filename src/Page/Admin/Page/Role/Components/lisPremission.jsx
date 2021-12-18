import { Button, Checkbox, Card } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import roleApi from "../../../../../api/roleApi";
const ListPermission = (props) => {
  const { data } = props;
  console.log(data[9].status);
  const [demo, setdemo] = useState("");

  let history = useHistory();
  const handleRemove = (id) => {
    try {
      const fetchRemoveRole = async (data) => {
        try {
          const res = await roleApi.DelRole(data);
          if (res.status == 200) {
            Swal.fire("...", "Xóa Thành Công!", "success").then((result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/role" });
              }
            });
          }
        } catch (err) {
          console.log(err);
          Swal.fire("...", "Không đủ Thẩm quyền đề xóa", "error").then(
            (result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/admin/role" });
              }
            }
          );
        }
      };

      fetchRemoveRole(id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdd = () => {};
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <div className="BoxListPM">
      <table>
        <tbody>
          <tr>
            <th>Danh mục</th>
            <td>
              {data[0].name}{" "}
              <Checkbox defaultChecked={data[0].status} onChange={onChange} />
            </td>
            <td>
              {data[1].name} <Checkbox defaultChecked={data[1].status} />
            </td>
            <td>
              {data[2].name} <Checkbox defaultChecked={data[2].status} />
            </td>
          </tr>
          <tr>
            <th>Sản phẩm</th>
            <td>
              {data[4].name} <Checkbox defaultChecked={data[4].status} />
            </td>
            <td>
              {data[5].name} <Checkbox defaultChecked={data[5].status} />
            </td>
            <td>
              {data[3].name} <Checkbox defaultChecked={data[3].status} />
            </td>
          </tr>
          <tr>
            <th>Mã giảm giá</th>
            <td>
              {data[6].name} <Checkbox defaultChecked={data[6].status} />
            </td>
            <td>
              {data[7].name} <Checkbox defaultChecked={data[7].status} />
            </td>
            <td>
              {data[8].name} <Checkbox defaultChecked={data[8].status} />
            </td>
          </tr>
          <tr>
            <th>Đơn hàng</th>
            <td>
              {data[9].name} <Checkbox defaultChecked={data[9].status} />
            </td>
          </tr>
        </tbody>
      </table>
      {/* {
                props.data.map(item=>(
                    <Card title={item.name} key={item.idPermissions} bordered={false}>
                        <Checkbox defaultChecked={item.status} />
                    </Card>
                ))
            } */}
      <div className="RemoveRole">
        <Button onClick={() => handleAdd(data._id)}>Lưu</Button>
      </div>
      <div className="RemoveRole">
        <Button onClick={() => handleRemove(data._id)}>Xóa Chức Vụ</Button>
      </div>
    </div>
  );
};

export default ListPermission;
