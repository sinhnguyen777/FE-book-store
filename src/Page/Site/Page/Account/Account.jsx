import {
  HeartOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Image,
  Input,
  Layout,
  List,
  Menu,
  message,
  Popconfirm,
  Row,
  Space,
  Typography,
} from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import moment from "moment";
import React from "react";
import { Link } from "react-scroll";
import logoclient from "../../../../Assets/Images/Account/logoclient.png";
import logovip from "../../../../Assets/Images/Account/logovip.png";
import logouser from "../../../../Assets/Images/Account/meow.jpg";

// import { Redirect } from 'react-router'

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const dateFormat = "YYYY-MM-DD";
const { Meta } = Card;
const text = "Bạn không thích sản phẩm này nữa?";

function confirm() {
  message.info("Đã xóa khỏi danh sách.");
}

const listData = [];


for (let i = 0; i < 10; i++) {
  listData.push({
    id: i,
    title: `Tiêu đề thứ  ${i}`,
  });
}


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user_info: [],
      item: {},
      vip: Boolean,
      lg: "",
      local: [],
    };
    this.state.local = JSON.parse(localStorage.getItem("user-info"));
    if (this.state.local) {
      this.state.user_info = this.state.local;
    } else {
      message.warn("Vui lòng đăng nhập");
    }
    this.state.item = {
      fullName: this.state.user_info.data[0].fullName,
      createdAt: this.state.user_info.data[0].createdAt,
      email: this.state.user_info.data[0].email,
      blockMail: this.state.user_info.data[0].blockMail,
      listDiscount: this.state.user_info.data[0].listDiscount,
      productLove: this.state.user_info.data[0].productLove,
      password: this.state.user_info.data[0].password,
      updatedAt: this.state.user_info.data[0].updatedAt,
      // address: this.state.user_info.data[0].updatedAt,
      v: this.state.user_info.data[0].__v,
      // avatar: this.state.user_info.data[0].updatedAt,
      // phone: this.state.user_info.data[0].phone,
      token: this.state.user_info.token,
    };
    //logo vip or user
    if (this.state.item.v === 1) {
      this.state.lg = logovip;
    } else this.state.lg = logoclient;
  }

  // rate
  handleChange = (value) => {
    this.setState({ value });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  removeUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user-info');
  }
  handleLogout = () => {
    this.removeUserSession();
    this.props.history.push('/login');
  }
  render() {
    //    console.log(this.state.item.blockMail);
    return (
      <div className="container_client">
        <Layout>
          <Sider
            className="boxleft"
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <div className="logo">TRANG CÁ NHÂN</div>
            <Menu mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="nguoidung" smooth={true} duration={1000}>
                  Người dùng
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<HeartOutlined />}>
                <Link to="yeuthich" smooth={true} duration={1000}>
                  Yêu thích
                </Link>
              </Menu.Item>
             
              <Menu.Item key="4" icon={<ReadOutlined />}>
                <Link to="donhang" smooth={true} duration={1000}>
                  Đơn hàng
                </Link>
              </Menu.Item>
              <Menu.Item key="5" disabled="disabled"></Menu.Item>
              <Menu.Item key="6" disabled="disabled"></Menu.Item>
              <Menu.Item key="7" disabled="disabled"></Menu.Item>
              <Menu.Item key="8" disabled="disabled"></Menu.Item>
              <Menu.Item disabled="disabled">
                <Button className="Dangxuat" onClick={this.handleLogout} icon={<LoginOutlined />}>
                  Đăng xuất
                </Button>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {/* Nguoi dung */}
              <Divider orientation="left" id="nguoidung">
                Người dùng
              </Divider>
              {/* top */}
              <Row>
                <Col>
                  <Avatar size={130} src={<Image src={logouser} />} />
                </Col>
                <Col className="TitleUser">
                  <span className="mock-block">
                    <Title className="code-box-demo" level={3}>
                      {this.state.item.fullName}
                    </Title>
                    <Title type="secondary" className="code-box-demo" level={5}>
                      Ngày cập nhập : {this.state.item.updatedAt}
                    </Title>
                  </span>
                </Col>
                <Col className="Vip">
                  <Link>
                    <Image
                      width={50}
                      height={50}
                      src="error"
                      fallback={this.state.lg}
                    />
                  </Link>
                </Col>
              </Row>
              {/* thong tin */}
              <Row className="Thongtin">
                <Col span={12} className="Item">
                  <p>
                    <Text strong>Số điện thoại</Text>
                  </p>
                  <Input placeholder="" value="Không có thông tin" />
                </Col>
                <Col span={12} className="Item">
                  <p>
                    <Text strong>Email</Text>
                  </p>
                  <Input placeholder="" value={this.state.item.email} />
                </Col>
                <Col span={12} className="Item">
                  <p>
                    <Text strong>Địa chỉ hiện tại</Text>
                  </p>
                  <Input placeholder="" value="Không có thông tin" />
                </Col>
                <Col span={12} className="Item">
                  <p>
                    <Text strong>BlockEmail</Text>
                  </p>
                  <Text code>{this.state.item.blockMail.toString()}</Text>
                </Col>
                <Col span={12} className="Item">
                  <p>
                    <Text strong>Ngày khởi tạo</Text>
                  </p>
                  <DatePicker
                    defaultValue={moment(
                      `${this.state.item.createdAt}`,
                      dateFormat
                    )}
                    disabled
                  />
                </Col>
                <Col span={12} className="Item">
                  <p>
                    <Text strong>Mật khẩu</Text>
                  </p>
                  <Input.Password
                    placeholder=""
                    value={this.state.item.password}
                  />
                </Col>
              </Row>
              {/* Yêu thích*/}
              <Divider orientation="left" id="yeuthich">
                Yêu thích
              </Divider>
              <List
                className="acount-list-item"
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {},
                  pageSize: 4,
                }}
                dataSource={listData}
                renderItem={(item) => (
                  <List.Item className="list" key={item.id}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                      }
                    >
                      <Meta title={item.title} description="Duc Sy" />
                      <Popconfirm
                        placement="topLeft"
                        title={text}
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button className="dislike" type="primary" danger>
                          Bỏ thích
                        </Button>
                      </Popconfirm>
                    </Card>
                  </List.Item>
                )}
              />
              {/* Đánh gia*/}
              
              ,{/* Don hang */}
              <Divider orientation="left" id="donhang">
                Đơn hàng
              </Divider>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Account;
