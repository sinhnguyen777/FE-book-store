import { Col, PageHeader, Row } from "antd";
import React, { useEffect, useState } from "react";
import userApi from "../../../../api/userApi";
import ListUser from "./Components/ListUser";

const User = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    const fetchCata = async () => {
      const res = await userApi.GetAll();
      setuser(res.data);
    };

    fetchCata();
  }, []);
  return (
    <div className="CatalogsPage">
      <PageHeader
        className="site-page-header"
        title="Trang quản lý người dùng"
      />
     

      <Row className="ListCata">
        <Col span={24}>
          <ListUser data={user} />
        </Col>
      </Row>
    </div>
  );
};

export default User;
