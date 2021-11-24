import { Avatar, Button, Layout } from 'antd';
import React, { useState } from 'react';
import HeaderCmp from './Layout/Header/header';
import { Switch, Route, Link } from 'react-router-dom';
import RouterWrapper from './Routers/Routes'
import Logo from '../../Assets/Images/Admin/logo.png';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';


const { Header, Sider, Content } = Layout;

const Admin = () => {

    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapsed = () => {
        setcollapsed(!collapsed);
    }

    const getAdmin = () => {
        const adminStr = sessionStorage.getItem('admin');
        if (adminStr) return JSON.parse(adminStr);
        else return null;
    }

    const removeUserSession = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('admin');
    }
    const admin = getAdmin();
    let history = useHistory();
    const handleLogout = () => {
        removeUserSession();
        history.push('/admins/login');
    }
    return (

        <Layout className="Admin">
            <Header className="site-layout-background">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="BoxRight">
                    { admin ? 
                        <Button type="button" title="Đăng xuất" onClick={handleLogout}>{admin.fullName}</Button>
                        : 
                        <Link title="Đăng nhập" to='/admins/login'><Avatar size={40} icon={<UserOutlined />} /></Link> 
                    }
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