import { Col, PageHeader, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import roleApi from '../../../../api/roleApi'
import FromAdd from './components/FormAdd'
import ListMember from './components/LisMember'

const Member = () => {
    const [demo, setdemo] = useState()
    const [DataRole, setDataRole] = useState([])

    const handleSubmitFrom = (values)=> {
        console.log(values);
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
                title="Trang Thành viên"
            />

            <div className="BoxForm">
                <div className="title">Thêm chức vụ</div>
                <FromAdd handleSubmitFrom={handleSubmitFrom} />
            </div>

            <Row className='ListCata'>
                <Col span={24}>
                    <ListMember data={DataRole.data} />
                </Col>
            </Row>
        </div>
    )
}

export default Member
