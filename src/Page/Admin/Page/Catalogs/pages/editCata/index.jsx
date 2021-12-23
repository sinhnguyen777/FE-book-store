import React, { useEffect, useState } from "react";
import { Button, Col, PageHeader, Row } from 'antd';
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
import cataApi from "../../../../../../api/cataApi";
import FromCata from "../../Components/FormCata";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';

const EditCata = () => {
    const match = useRouteMatch();
    const [DataEdit, setDataEdit] = useState();
    let history = useHistory();


    useEffect(() => {
        const idCata = match.params.id;
        const fetchCataByID = async (idCata) => {
            const res = await cataApi.GetCataById(idCata)
            return setDataEdit(res.data);;
        }

        fetchCataByID(idCata)
    }, [])

    const handleSubmitFrom = async (values) => {

        const data = {
            id: match.params.id,
            ...values
        }


        const fetchUpdateCata = async (data) => {
            try {
                const res = await cataApi.UpdateCata(data);
                if (res.data.status == 200) {
                    Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            // history.push({ pathname: '/admin/cata' })
                        }
                    })
                }

                if (res.data.status == 403) {
                    Swal.fire('...', 'Bạn không đủ thẩm quyền để sửa', 'error')
                }
            } catch (err) {
                console.log(err);
               
            }
        }

        fetchUpdateCata(data);
    }

    return (
        <div className="EditCataPage">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Sửa Danh Mục"
            />
            {
                DataEdit
                    ?
                    <Row>
                        <Col span={24} className="BoxCata">
                            <div className="BoxFormCata">
                                <div className="title">Sửa Danh Mục</div>
                                <FromCata data={DataEdit} handleSubmitFrom={handleSubmitFrom} />
                            </div>
                        </Col>
                    </Row>
                    :
                    <LoadingOutlined />
            }
        </div>
    );
}

export default EditCata