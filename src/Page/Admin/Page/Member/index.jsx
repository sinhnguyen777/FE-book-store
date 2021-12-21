import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Button } from 'antd';
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import roleApi from "../../../../api/roleApi";
import FromRoleAdd from "./Components/FormRoleAdd";
import ListRole from "./Components/ListMember";


const Member = () => {
    const [render, setrender] = useState('')
    const [DataRole, setDataRole] = useState([]);

    let history = useHistory();
    const handleSubmitFrom = (values)=>{
        const fetchUpdateRole = async (data) => {
            try {
                const res = await roleApi.AddRole(data);
                if (res.status === 200) {
                    Swal.fire('...', 'Thêm Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setrender(pre=>pre+1);
                            history.push({ pathname: '/admin/role' })
                        }
                    })
                }
               
                console.log(res);
            } catch (err) {
                Swal.fire('Lỗi', 'Chức vụ đã có trong danh sách', 'error')
            }
        }

        fetchUpdateRole(values);
    };

    useEffect(() => {
        const fetchRole = async () => {
          const res = await roleApi.GetRole()
          setDataRole(res);
        }
    
        fetchRole();
      }, [render])

    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Trang Danh sách Admin"
            />

            <div className="BoxFormMember">
                <div className="title">Thêm chức vụ</div>
                <FromRoleAdd handleSubmitFrom={handleSubmitFrom} />
            </div>

            <Row className='ListCata'>
                <Col span={24}>
                    <ListRole data={DataRole.data} />
                </Col>
            </Row>
        </div>
    );
}

export default Member;