import React, { useEffect, useState } from "react";
import { Button, Col, PageHeader, Row } from 'antd';
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';
import roleApi from "../../../../../../api/roleApi";
import FromRole from "../../Components/FormRole";

const EditRole= () => {
    const match = useRouteMatch();
    const [DataEdit, setDataEdit] = useState();
    let history = useHistory();
    console.log(match.params.id);


    useEffect(() => {
        const idRole = match.params.id;
        const fetchRoleByID = async (idRole) => {
            const res = await roleApi.GetRoleById(idRole)
            return setDataEdit(res.data);
        }

        fetchRoleByID(idRole)
    }, [])

    const handleSubmitFrom = async (values) => {

        const data = {
            id: match.params.id,
            ...values
        }


        const fetchUpdateRole= async (data) => {
            try {
                const res = await roleApi.UpdateRole(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            history.push({ pathname: '/admin/role' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdateRole(data);
    }

    return (
        <div className="EditCataPage">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Sửa chức năng"
            />
            {
                DataEdit
                    ?
                    <Row>
                        <Col span={24} className="BoxCata">
                            <div className="BoxFormCata">
                                <div className="title">Sửa chức năng</div>
                                <FromRole data={DataEdit} handleSubmitFrom={handleSubmitFrom} />
                            </div>
                        </Col>
                    </Row>
                    :
                    <LoadingOutlined />
            }
        </div>
    );
}

export default EditRole