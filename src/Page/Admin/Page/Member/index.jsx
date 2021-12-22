import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Button } from 'antd';
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import roleApi from "../../../../api/roleApi";
import FromRoleAdd from "./Components/FormRoleAdd";
import ListRole from "./Components/ListMember";


const Member = () => {
    const [DataRole, setDataRole] = useState([]);

    useEffect(() => {
        const fetchRole = async () => {
          const res = await roleApi.GetRole()
          setDataRole(res);
        }
    
        fetchRole();
      }, [])

    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Trang Danh sách Admin"
            />

            <div className="BoxFormMember">
                <div className="title">Thêm chức vụ</div>
                <FromRoleAdd />
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