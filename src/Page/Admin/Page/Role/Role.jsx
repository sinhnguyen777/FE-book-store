import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col } from 'antd';
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import roleApi from "../../../../api/roleApi";
import FromRoleAdd from "./Components/FormRoleAdd";
import ListRole from "./Components/ListRole";


const Role = () => {
    const [demo, setdemo] = useState('')
    const [DataRole, setDataRole] = useState([]);

    let history = useHistory();
    const handleSubmitFrom = (values)=>{
        const fetchUpdateRole = async (data) => {
            try {
                const res = await roleApi.AddRole(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Thêm Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/admin/role' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdateRole(values);
    };

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

    useEffect(() => {
        const fetchRole = async () => {
          const res = await roleApi.GetRole()
          setDataRole(res);
        }
    
        fetchRole();
      }, [demo])

    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Trang chức vụ"
            />

            <div className="BoxForm">
                <div className="title">Thêm chức vụ</div>
                <FromRoleAdd handleSubmitFrom={handleSubmitFrom} />
            </div>

            <Row className='ListCata'>
                <Col span={24}>
                    <ListRole data={DataRole.data} handleRemove={handleRemove} />
                </Col>
            </Row>
        </div>
    );
}

export default Role;