import {
    ContainerOutlined, FormOutlined, InboxOutlined, LogoutOutlined
} from '@ant-design/icons';
import { Menu, message, Popconfirm } from 'antd';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Link, useHistory, useLocation } from 'react-router-dom';


const HeaderCmp = (props) => {
    const location = useLocation();
    let history = useHistory();
    const confirm = () => {
        logOut();
        message.info("Đã đăng xuất.");
    }
    const logOut = () => {
        localStorage.clear();
        history.push('/login');
    }
    const login = localStorage.getItem("login");
    console.log(login);
    return (
        <div>
            <Menu
                defaultSelectedKeys={[location.pathname]}
                mode="inline"
                theme="light"
                inlineCollapsed={props.collapsed}
            >
                <Menu.Item key="/account/" icon={<FormOutlined />}>
                    <Link to={"/account/"}>Thông Tin</Link>
                </Menu.Item>
                <Menu.Item key="/account/wish-list" icon={<InboxOutlined />}>
                    <Link to={"/account/wish-list"}>Sản phẩm yêu thích</Link>
                </Menu.Item>
                <Menu.Item key="/account/order" icon={<ContainerOutlined />}>
                    <Link to="/account/order">Đơn hàng</Link>
                </Menu.Item>
                {
                    login == 'login-gg'
                        ?
                        <Menu.Item icon={<LogoutOutlined />}>
                            <GoogleLogout
                                className="btngg"
                                buttonText="Logout"
                                onLogoutSuccess={logOut}
                            >
                            </GoogleLogout>
                            Đăng xuất
                        </Menu.Item>
                        :
                        <Menu.Item icon={<LogoutOutlined />}>
                            <Popconfirm
                                placement="topLeft"
                                title="Bạn muốn đăng xuất?"
                                onConfirm={confirm}
                                okText="Có"
                                cancelText="Không"
                            >
                                Đăng xuất
                            </Popconfirm>
                        </Menu.Item>
                }
            </Menu>
        </div>

    );
}

export default HeaderCmp;