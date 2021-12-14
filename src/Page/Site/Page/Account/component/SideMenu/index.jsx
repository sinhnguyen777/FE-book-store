import {
    ContainerOutlined, FormOutlined, InboxOutlined, LogoutOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const HeaderCmp = (props) => {
    const location = useLocation();
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
                <Menu.Item icon={<LogoutOutlined />}>
                    Đăng xuất
                </Menu.Item>
            </Menu>
        </div>

    );
}

export default HeaderCmp;