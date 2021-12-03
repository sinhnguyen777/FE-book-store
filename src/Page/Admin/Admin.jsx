import { Avatar, Button, Dropdown, Layout,Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderCmp from './Layout/Header/header';
import { Switch, Route, Link } from 'react-router-dom';
import RouterWrapper from './Routers/Routes'
import Logo from '../../Assets/Images/Admin/logo.png';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import adminApi from '../../api/adminApi';
import Swal from 'sweetalert2';


const { Header, Sider, Content } = Layout;

const Admin = () => {

    useEffect(() => {
        const adminToken = localStorage.getItem('token');
        if(!adminToken){
            history.push('/admins/login');
        }

        const fetchAccessToken = async () => {
            try {
                const adminToken = await localStorage.getItem('token');
                const data={
                    token:adminToken,
                }
                const res = await adminApi.AccessToken(data);
            } catch (err) {
                console.log(err);
                Swal.fire('Phiên đăng nhập hết hạn', 'vui lòng đăng nhập lại để vào trang quản trị', 'error');
                history.push('/admins/login');
            }
        }

        fetchAccessToken()
    }, [])


    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapsed = () => {
        setcollapsed(!collapsed);
    }

    const getAdmin = () => {
        const adminStr = localStorage.getItem('admin');
        if (adminStr) return JSON.parse(adminStr);
        else return null;
    }

    const removeUserSession = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
    }

    const admin = getAdmin();
    let history = useHistory();
    const handleLogout = () => {
        removeUserSession();
        history.push('/admins/login');
    }
    const menu = (
        <Menu>
          <Menu.Item>
            <Link  rel="noopener noreferrer" to="/admins/changepass">
                Đổi mật khẩu
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link rel="noopener noreferrer" to="/admins/login" onClick={handleLogout}>
              Đăng xuất
            </Link>
          </Menu.Item>
         
        </Menu>
      );
    return (

        <Layout className="Admin">
            <Header className="site-layout-background">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="BoxRight">
                <Dropdown overlay={menu} placement="bottomCenter">
                    {admin ?
                        <Button type="button" title="Đăng xuất" >{admin.fullName}</Button>
                        :
                        <Link title="Đăng nhập" to='/admins/login'><Avatar size={40} icon={<UserOutlined />} /></Link>
                    }
                </Dropdown>
                    
                </div>

            </Header>

            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme="light">
                    <HeaderCmp collapsed={collapsed} />
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                    }}
                >
                    <Switch>
                        <Route path="/" component={RouterWrapper}></Route>
                    </Switch>

                </Content>
            </Layout>
        </Layout>

    );
}

export default Admin