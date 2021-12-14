import {
  Avatar,
  Card,
  Col,
  Divider,
  Image,
  Input,
  Layout,
  Row,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import userApi from "../../../../../../api/userApi";
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const dateFormat = "YYYY-MM-DD";
const { Meta } = Card;
const text = "Bạn không thích sản phẩm này nữa?";

const Infor = () => {
  let history = useHistory();

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
            </Col>
            <Col className="TitleUser">
              <span className="mock-block">
                <Title className="code-box-demo" level={2}>
                  {user.data[0].fullName}
                </Title>
                <Title type="secondary" className="code-box-demo" level={4}>
                  Ngày cập nhật : {user.data[0].updatedAt}
                </Title>
              </span>
            </Col>
          </Row>
          <Row className="Thongtin">
            <Col span={12} className="Item">
              <p>
                <Text strong>Số điện thoại</Text>
              </p>
              <Input
                placeholder=""
                value={
                  user.data[0].phone
                    ? user.data[0].phone
                    : "Chưa có số điện thoại"
                }
              />
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
                <Text strong>Địa chỉ</Text>
              </p>
              <Input
                placeholder=""
                value={
                  user.data[0].address
                    ? user.data[0].address
                    : "Chưa có địa chỉ"
                }
              />
            </Col>
            <Col span={12} className="Item">
              <p>
                <Text strong>Gói dịch vụ</Text>
              </p>
              <p>{user.data[0].vip ? user.data[0].vip : "Chưa có"}</p>
            </Col>
          </Row>
          <Row style={{marginLeft:'20px'}}>
            <button className="btn ButtonMain">Sửa thông tin</button>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Infor;
