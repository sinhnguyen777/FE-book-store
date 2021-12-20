import { Button, Checkbox, Card } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import roleApi from "../../../../../api/roleApi";
const ListPermission = (props) => {
  const { data, idRole } = props;
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
                history.push({ pathname: "/admin/Member" });
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

  const handleChange = async (values) => {
    try {
      console.log(values.target.checked);
      const newData = [...data];
      newData.map((item) => {
        if (item.idPermissions === values.target.value) {
          item.status = values.target.checked;
        }
      });
      const dataUpdate = {
        id: idRole,
        listPermissions: newData,
      };
      console.log(newData);
      const res = await roleApi.UpdateRole(dataUpdate);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="BoxListPM">
      <table>
        <tbody>
          <tr>
            <th>Danh mục</th>
            <td>
              {data[0].name}{" "}
              <Checkbox
                value={data[0].idPermissions}
                defaultChecked={data[0].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[1].name}{" "}
              <Checkbox
                value={data[1].idPermissions}
                defaultChecked={data[1].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[2].name}{" "}
              <Checkbox
                value={data[2].idPermissions}
                defaultChecked={data[2].status}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Sản phẩm</th>
            <td>
              {data[4].name}{" "}
              <Checkbox
                value={data[4].idPermissions}
                defaultChecked={data[4].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[5].name}{" "}
              <Checkbox
                value={data[5].idPermissions}
                defaultChecked={data[5].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[3].name}{" "}
              <Checkbox
                value={data[3].idPermissions}
                defaultChecked={data[3].status}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Mã giảm giá</th>
            <td>
              {data[6].name}{" "}
              <Checkbox
                value={data[6].idPermissions}
                defaultChecked={data[6].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[7].name}{" "}
              <Checkbox
                value={data[7].idPermissions}
                defaultChecked={data[7].status}
                onChange={handleChange}
              />
            </td>
            <td>
              {data[8].name}{" "}
              <Checkbox
                value={data[8].idPermissions}
                defaultChecked={data[8].status}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Đơn hàng</th>
            <td>
              {data[9].name}{" "}
              <Checkbox
                value={data[9].idPermissions}
                defaultChecked={data[9].status}
              />
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
        <Button onClick={() => handleRemove(idRole)}>Xóa Chức Vụ</Button>
      </div>
    </div>
  );
};

export default ListPermission;
