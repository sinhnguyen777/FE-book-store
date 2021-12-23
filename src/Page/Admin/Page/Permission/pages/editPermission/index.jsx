import React, { useEffect, useState } from "react";
import { Button, Col, PageHeader, Row } from 'antd';
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';
import permissionApi from "../../../../../../api/permissionApi";
import FromPermis from "../../Components/FormPermiss";

const EditPermission = () => {
    const match = useRouteMatch();
    const [DataEdit, setDataEdit] = useState();
    let history = useHistory();
    console.log(match.params.id);


    useEffect(() => {
        const idPermission = match.params.id;
        const fetchPermissionByID = async (idPermission) => {
            const res = await permissionApi.GetPermissionById(idPermission)
            return setDataEdit(res.data);
        }

        fetchPermissionByID(idPermission)
    }, [])

    const handleSubmitFrom = async (values) => {

        const data = {
            id: match.params.id,
            ...values
        }


        const fetchUpdatePermissions = async (data) => {
            try {
                const res = await permissionApi.UpdatePermission(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            history.push({ pathname: '/admin/permission' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdatePermissions(data);
    }

    return (
        <div className="EditCataPage">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Sửa quyền"
            />
            {
                DataEdit
                    ?
                    <Row>
                        <Col span={24} className="BoxCata">
                            <div className="BoxFormCata">
                                <div className="title">Sửa quyền</div>
                                <FromPermis data={DataEdit} handleSubmitFrom={handleSubmitFrom} />
                            </div>
                        </Col>
                    </Row>
                    :
                    <LoadingOutlined />
            }
        </div>
    );
}

export default EditPermission