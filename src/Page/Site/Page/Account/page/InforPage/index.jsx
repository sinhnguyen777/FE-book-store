import { UploadOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  Upload,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userApi from "../../../../../../api/userApi";
const { Content } = Layout;
const { Title, Text } = Typography;

const Infor = () => {
  let history = useHistory();
  const [ValueAvata, setValueAvata] = useState();
  const [ValueSdt, setValueSdt] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (!userToken) {
      history.push("/login");
    }

    const fetchAccessToken = async () => {
      try {
        const userToken = await localStorage.getItem("token");
        const data = {
          token: userToken,
        };
        const res = await userApi.AccessToken(data);
      } catch (err) {
        console.log(err);
        // Swal.fire("Phiên đăng nhập hết hạn", "vui lòng đăng nhập lại", "error");
      }
    };

    fetchAccessToken();
  }, []);

  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };

  const user = getUser();
  const dateCreate = new Date(user.data[0].updatedAt);
  const dateUpdate =
    dateCreate.getDate() +
    "-" +
    (dateCreate.getMonth() + 1) +
    "-" +
    dateCreate.getFullYear();

  const DateVip = new Date(user.data[0].vip);
  const NewDateVip =
    DateVip.getDate() +
    "-" +
    (DateVip.getMonth() + 1) +
    "-" +
    DateVip.getFullYear();

  const imagesAvt = {
    onChange: (info) => {
      console.log(info);
    },
  };

  const avatarUpload = file => {
    // const userId = this.props.userdetail.data.data.id;
    const data = new FormData();
    data.append('avatar', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(`https://beonlinelibrary.herokuapp.com/users/upload-avt`, data, config)
      .then(res => setValueAvata(res.data.path))
      .catch(err => console.log(err));
  };

  const handleSubmitFrom = async () => {
    const data = {
      id: user.data[0]._id,
      phone:ValueSdt,
      avatar:ValueAvata
    }
    const res = await userApi.Update(data);
    console.log(res);
  };

  return (
    <div className="container_client">
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Row>
            <Col>
              <Avatar
                size={130}
                src={
                  <Image
                    src={`https://beonlinelibrary.herokuapp.com/${user.data[0].avatar}`}
                  />
                }
              />

              <div style={{marginTop: '10px'}}>
                <Upload /*  action="https://beonlinelibrary.herokuapp.com/users/upload-avt" */  action={avatarUpload} name="avatar" {...imagesAvt}>
                  <Button  icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
              </div>
            </Col>
            <Col className="TitleUser">
              <span className="mock-block">
                <Title className="code-box-demo" level={2}>
                  {user.data[0].fullName}
                </Title>
                <Title type="secondary" className="code-box-demo" level={4}>
                  Ngày cập nhật : {dateUpdate}
                </Title>
              </span>
            </Col>
          </Row>
          <Row className="Thongtin">
            <Col span={12} className="Item">
              <p>
                <Text strong>Số điện thoại</Text>
              </p>
              {user.data[0].phone ? (
                <Input
                  onChange={(e) => setValueSdt(e.target.value)}
                  placeholder=""
                  value={user.data[0].phone}
                />
              ) : (
                <Input
                  onChange={(e) => setValueSdt(e.target.value)}
                  placeholder="Chưa có số điện thoại"
                />
              )}
            </Col>
            <Col span={12} className="Item">
              <p>
                <Text strong>Email</Text>
              </p>
              <Input
                placeholder=""
                value={
                  user.data[0].email
                    ? user.data[0].email
                    : "Chưa có địa chỉ email "
                }
              />
            </Col>
            <Col span={12} className="Item">
              <p>
                <Text strong>Gói dịch vụ</Text>
              </p>
              <p>{NewDateVip}</p>
            </Col>
          </Row>
          <Row style={{ marginLeft: "20px" }}>
            <button onClick={handleSubmitFrom} className="btn ButtonMain">
              Lưu
            </button>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Infor;
