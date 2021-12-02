import { Button, Comment, Tooltip , Skeleton,  DatePicker , Divider , Layout, Menu, Input , 
          Breadcrumb, Avatar,Typography , Image ,Space ,Card ,List ,Rate   ,message ,Popconfirm  } from 'antd';
import { Row, Col } from 'antd';
import { BrowserRouter , Route, Link, NavLink, Redirect } from "react-router-dom";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    TeamOutlined,
    UserOutlined,
    MessageOutlined,
    LikeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HeartOutlined,
    ProfileOutlined,
    StarOutlined,
    ReadOutlined,
    LoginOutlined
  } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React, { useState , createElement } from 'react';
import { render ,ReactDOM } from 'react-dom';
import moment from 'moment'
import logouser from '../../../../Assets/Images/User/meow.jpg'
import logovip from '../../../../Assets/Images/logovip.png'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title ,Text } = Typography;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Meta } = Card;
const desc = ['Rất tệ', 'Tệ', 'Bình thường', 'Hay', 'Rất hay'];
const text = 'Bạn không thích sản phẩm này nữa?';
function confirm() {
     message.info('Đã xóa khỏi danh sách.');
   }
const listData = [];
// danh gia
const data = [
     {
          ten: 'Đắc nhân tâm',
          img: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
          value: 5,
          noidung: 'Nội dung rất bánh cuốn . Tôi nghĩ cuốn sách này rất ngon.'
     },
     {
          ten: 'Đắc nhân tâm',
          img: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
          value: 3,
          noidung: 'Nội dung rất bánh cuốn . Tôi nghĩ cuốn sách này rất ngon.'
     },
     {
          ten: 'Đắc nhân tâm',
          img: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
          value: 3,
          noidung: 'Nội dung rất bánh cuốn . Tôi nghĩ cuốn sách này rất ngon.'
     },
     {
          ten: 'Đắc nhân tâm',
          img: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
          value: 3,
          noidung: 'Nội dung rất bánh cuốn . Tôi nghĩ cuốn sách này rất ngon.'
     },
    {
          ten: 'Đắc nhân tâm',
          img: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
          value: 3,
          noidung: 'Nội dung rất bánh cuốn . Tôi nghĩ cuốn sách này rất ngon.'
     },

     

   ];



for (let i = 0; i < 10; i++) {
     listData.push({
          id: i,
          title: `Tiêu đề thứ  ${i}`,
     });
   }

   const IconText = ({ icon, text }) => (
     <Space>
       {React.createElement(icon)}
       {text}
     </Space>
   );

class Clients extends React.Component {

    state = {
        collapsed: false,

    };
// rate
    handleChange = value => {
     this.setState({ value });
   };

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    render() {
        return (
             
        <div className="container">
        <Layout>
        <Sider className="boxleft"
         trigger={null}  collapsed={this.state.collapsed}>
          <div className="logo" >
              TRANG CÁ NHÂN
              </div>
          <Menu  mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Người dùng
            </Menu.Item>
            <Menu.Item key="2" icon={<HeartOutlined />}>
               Yêu thích
            </Menu.Item>
            <Menu.Item key="3" icon={<StarOutlined />}>
               Đánh giá
            </Menu.Item>
            <Menu.Item key="4" icon={<ReadOutlined/>}>
            Đơn hàng
            </Menu.Item>
            <Menu.Item key="5" disabled="disabled">
            </Menu.Item>
            <Menu.Item key="6" disabled="disabled">
            </Menu.Item>
            <Menu.Item key="7" disabled="disabled">
            </Menu.Item>
            <Menu.Item key="8" disabled="disabled">
            </Menu.Item>
            <Menu.Item disabled="disabled">
            <Button className="Dangxuat"  icon={<LoginOutlined />}>
            Đăng xuất
            </Button>
            </Menu.Item>
          </Menu>
        
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
               {/* Nguoi dung */}
                <Divider orientation="left">Người dùng</Divider>
                {/* top */}
               <Row>
               <Col>
                    <Avatar size={130} src={<Image src={logouser}  />} />
               </Col>
               <Col  className="TitleUser">
               <span className="mock-block">
                    <Title className="code-box-demo" level={3}>Nguyễn Đức Sỹ</Title>
                    <Title type="secondary" className="code-box-demo" level={5}>Ngày hết hạn : 20/11/2021</Title>
               </span>
               </Col>
               <Col className="Vip">
               <Link>
                    <Image
                         width={50}
                         height={50}
                         src="error"
                         fallback={logovip}
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
                         <Input   placeholder=""value="0702456899" />
                    </Col>
                    <Col span={12} className="Item">
                         <p>
                         <Text strong>Email</Text>
                         </p>
                         <Input   placeholder=""value="nguyeducsy123@gmail.com" />
                    </Col>
                    <Col span={12} className="Item">
                         <p>
                         <Text strong>Địa chỉ hiện tại</Text>
                         </p>
                         <Input   placeholder=""value="1A Tân Thới Nhất , Phường TTN, Quận 12" />
                    </Col>
                    <Col span={12} className="Item">
                         <p>
                         <Text strong>BlockEmail</Text>
                         </p>
                         <Text code>true</Text>
                    </Col>
                    <Col span={12} className="Item">
                         <p>
                         <Text strong>Ngày khởi tạo</Text>
                         </p>
                         <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
                    </Col>
                    <Col span={12} className="Item">
                         <p>
                         <Text strong>Mật khẩu</Text>
                         </p>
                         <Input.Password placeholder="" value="123456" />
                    </Col>
               </Row>
               {/* Yêu thích*/}
               <Divider orientation="left">Yêu thích</Divider>
               <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                         onChange: page => {
                         },
                         pageSize: 4,
                    }}
               dataSource={listData}

               renderItem={item => (
               <List.Item
               className="list"
               key={item.id}
               >
                              <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                              >
                              <Meta title= {item.title} description="Duc Sy" />
                              <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                              <Button className="dislike" type="primary"  danger>Bỏ thích</Button>
                              </Popconfirm>
                              </Card>
               </List.Item>
               )}
               />
                {/* Đánh gia*/}
                <Divider orientation="left">Đánh giá</Divider>
                
                <List
                    dataSource={data}
                    renderItem={item => (
                   
                    <Row>  
                    <List.Item> 
                     <Col className="Trai" span={2}>
                         <Avatar className="ImgDanhgia" shape="square" size={92} src={item.img} alt="User" />
                    </Col>
                     <Col>
                     <Comment 
                         className="phai"
                         author={
                         <span>
                              <Meta title= {item.ten} className="TitleDanhgia" />
                              <Rate disabled  tooltips={desc} onChange={this.handleChange} value={item.value} />
                              {item.value ? <span className="ant-rate-text">{desc[item.value - 1]}</span> : ''}
                         </span>}
                         content={
                         <p>
                              {item.noidung}
                         </p>
                         }
                         datetime={
                         <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                              <span>{moment().fromNow()}</span>
                         </Tooltip>
                         }
                         />
                     </Col>
                    </List.Item>
                    </Row> 
                   )}
                   />,
                
               {/* Don hang */}
               <Divider orientation="left">Đơn hàng</Divider>
           
               
           

          </Content>
        </Layout>
      </Layout>

         </div>
        );
      }
    }
    
    export default Clients;

 