import { LoadingOutlined } from '@ant-design/icons';
import { Col, PageHeader, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import Swal from 'sweetalert2';
import couponApi from '../../../../../../api/couponApi';
import FormCoupon from '../../Components/FormCoupon/FormCoupon';

const EditCoupon = () => {
    const match = useRouteMatch();
    const [DataEdit, setDataEdit] = useState();
    let history = useHistory();


    useEffect(() => {
        const idCoupon = match.params.id;
        const fetchCataByID = async (idCoupon) => {
            const res = await couponApi.GetCouponById(idCoupon)
            return setDataEdit(res.data);;
        }

        fetchCataByID(idCoupon)
    }, [])

    const handleSubmitFrom = async (values) => {

        const data = {
            id: match.params.id,
            ...values
        }


        const fetchUpdateCata = async (data) => {
            try {
                const res = await couponApi.UpdateCoupon(data);
                if (res.status === 200) {
                    Swal.fire('Sửa coupon', 'Sửa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            history.push({ pathname: '/admin/coupon' })
                        }
                    })
                }
                if (res.data.status === 403) {
                    Swal.fire(
                        "Không thể Sửa",
                        "Không đủ thẩm quyền để Sửa",
                        "error"
                    )
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
                title="Sửa Mã giảm giá"
            />
            {
                DataEdit
                    ?
                    <Row>
                        <Col span={24} className="BoxCata">
                            <div className="BoxFormCata">
                                <div className="title">Sửa Mã giảm giá</div>
                                <FormCoupon data={DataEdit} handleSubmitFrom={handleSubmitFrom} />
                            </div>
                        </Col>
                    </Row>
                    :
                    <LoadingOutlined />
            }
        </div>
    )
}

export default EditCoupon
