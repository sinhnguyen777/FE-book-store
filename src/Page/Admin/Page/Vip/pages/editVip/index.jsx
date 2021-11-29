import React, { useEffect, useState } from "react";
import { Col, PageHeader, Row } from 'antd';
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';
import vipApi from "../../../../../../api/vipApi";
import FormVip from "../../Components/FormVip";

const EditVip = () => {
    const match = useRouteMatch();
    const [DataEdit, setDataEdit] = useState();
    let history = useHistory();

    useEffect(() => {
        const idVip= match.params.id;
        const fetchVipByID = async (idVip) => {
            const res = await vipApi.GetVipById(idVip)
            return setDataEdit(res.data);;
        }

        fetchVipByID(idVip)
    }, [])

    const handleSubmitFrom = async (values) => {

        const data = {
            id: match.params.id,
            ...values
        }

        const fetchUpdateVip = async (data) => {
            try {
                const res = await vipApi.UpdateVip(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            history.push({ pathname: '/admin/vip' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdateVip(data);
    }

    return (
        <div className="EditCataPage">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Sửa gói VIP"
            />
            {
                DataEdit
                    ?
                    <Row>
                        <Col span={24} className="BoxCata">
                            <div className="BoxFormCata">
                                <div className="title">Sửa Gói VIP</div>
                                <FormVip data={DataEdit} handleSubmitFrom={handleSubmitFrom} />
                            </div>
                        </Col>
                    </Row>
                    :
                    <LoadingOutlined />
            }
        </div>
    );
}

export default EditVip