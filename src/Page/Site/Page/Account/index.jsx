import { Layout } from 'antd';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderCmp from './component/SideMenu';
import RouterWrapper from './Routers/Routes'

const { Sider, Content } = Layout;

const InforPage = () => {
    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapsed = () => {
        setcollapsed(!collapsed);
    }

    
    return (
           <Layout className="InforPage">

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
    )
}

export default InforPage
