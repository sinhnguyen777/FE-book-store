import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import userApi from "../../../../api/userApi";
import HeaderCmp from "./component/SideMenu";
import RouterWrapper from "./Routers/Routes";

const { Sider, Content } = Layout;

const InforPage = () => {
  const [collapsed, setcollapsed] = useState(false);
  const history = useHistory();

  const toggleCollapsed = () => {
    setcollapsed(!collapsed);
  };

  useEffect(() => {
    const adminToken = localStorage.getItem("token");
    if (!adminToken) {
      history.push("/login");
    }
    const fetchAccessToken = async () => {
      try {
        const adminToken = await localStorage.getItem("token");
        const data = {
          token: adminToken,
        };
        console.log(data);
        const res = await userApi.AccessToken(data);
      } catch (err) {
        console.log(err);
        history.push("/account");
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <Layout className="InforPage">
      <Layout className="site-layout">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          theme="light"
        >
          <HeaderCmp collapsed={collapsed} />
        </Sider>
        <Content
          className="site-layout-background ContentPage"
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
};

export default InforPage;
