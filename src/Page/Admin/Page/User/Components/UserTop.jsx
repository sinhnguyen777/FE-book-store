import { Col, PageHeader, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import prouctApi from '../../../../../api/productApi';
import ListUserTop from './UserTop/ListUserTop'

const UserTop = () => {
  const [DataCata, setDataCata] = useState([]);

    useEffect(() => {
        const fetchCata = async () => {
          const res = await prouctApi.ProductsUserTop();
          setDataCata(res.data);
        };
    
        fetchCata();
      }, []);
      console.log(DataCata);
    return (
        <div className="CatalogsPage">
        <PageHeader className="site-page-header" title="Top 10 người dùng mua nhiều" />
  
        <Row className="ListCata">
          <Col span={24}>
            <ListUserTop data={DataCata}/>
          </Col>
        </Row>
      </div>
    )
}

export default UserTop
