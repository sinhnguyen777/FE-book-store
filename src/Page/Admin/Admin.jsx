import { Avatar, Layout } from 'antd';
import React, { useState } from 'react';
import HeaderCmp from './Layout/Header/header';
import { Switch, Route, Link } from 'react-router-dom';
import RouterWrapper from './Routers/Routes'
import Logo from '../../Assets/Images/Admin/logo.png';
import { UserOutlined } from '@ant-design/icons';


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
                    <Link to='/loginad'><Avatar size={40} icon={<UserOutlined />} /></Link>
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