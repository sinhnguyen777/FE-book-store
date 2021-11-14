import { Avatar, Layout } from 'antd';
import React, { useState } from 'react';
import HeaderCmp from './Layout/Header/header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouterWrapper from './Routers/Routes'
import Home from './Page/Home/Home';
import Logo from '../../Assets/Images/Admin/logo.png';
import { UserOutlined } from '@ant-design/icons';
import Menu from 'rc-menu/lib/Menu';


const { Header, Sider, Content } = Layout;

const Admin = () => {

    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapsed = () => {
        setcollapsed(!collapsed);
    }

    return (
        <Layout className="Admin">
            <Header className="site-layout-background">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="BoxRight">
                    <Avatar size={40} icon={<UserOutlined />} />
                </div>

            </Header>

            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme="light">
                    <HeaderCmp collapsed={collapsed} />
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    <Router>
                        <Route path="/" component={RouterWrapper} />
                    </Router>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin