import { Button, Checkbox } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import roleApi from "../../../../../api/roleApi";
const ListPermission = (props) => {
    const { data } = props;
    console.log(data);
    const [demo, setdemo] = useState('')
  
  
  let history = useHistory();
  const handleRemove = (id)=>{
    try{
        const fetchRemoveRole = async (data) => {
            try {
                const res = await roleApi.DelRole(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Xóa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/admin/role' })
                        }
                    })
                }
            } catch (err) {
                console.log(err);
                Swal.fire('...', 'Không đủ Thẩm quyền đề xóa', 'error').then((result) => {
                    if (result.isConfirmed) {
                        console.log(1);
                        setdemo(pre=>pre+1);
                        history.push({ pathname: '/admin/role' })
                    }
                })
            }
        }

        fetchRemoveRole(id);

    }
    catch(err){
        console.log(err);
    }
}
  return (
    <div className="BoxListPM">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Thêm</td>
            <td>Sửa</td>
            <td>Xóa</td>
            <td>Duyệt đơn</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Danh mục</th>
            <td><Checkbox checked/></td>
            <td><Checkbox checked/></td>
            <td><Checkbox checked/></td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <th>Sản phẩm</th>
            <td><Checkbox checked/></td>
            <td><Checkbox checked/></td>
            <td><Checkbox checked/></td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <th>Đơn hàng</th>
            <td><Checkbox/></td>
            <td><Checkbox/></td>
            <td><Checkbox/></td>
            <td><Checkbox checked/></td>
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
                <Button onClick={() => handleRemove(data._id)}>Xóa Chức Vụ</Button>
            </div>
    </div>
  );
};

export default ListPermission;
