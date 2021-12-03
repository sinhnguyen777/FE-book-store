import {
    ApartmentOutlined,
    ContainerOutlined, FormOutlined, HomeOutlined, InboxOutlined, SettingOutlined, ShoppingCartOutlined, StrikethroughOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';




const { SubMenu } = Menu;

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
                <Menu.Item key="/admin" icon={<HomeOutlined />}>
                    <Link to={"/admin"}>Trang chủ</Link>
                </Menu.Item>
                <Menu.Item key="/admin/cata" icon={<InboxOutlined />}>
                    <Link to={"/admin/cata"}>Danh mục</Link>
                </Menu.Item>
                <Menu.Item key="/admin/products" icon={<ContainerOutlined />}>
                    <Link to="/admin/products">Sách</Link>
                </Menu.Item>
                <Menu.Item key="/admin/order" icon={<ShoppingCartOutlined />}>
                    <Link to="/admin/order">Đơn Hàng</Link>                   
                </Menu.Item>
                <Menu.Item key="/admin/vip" icon={<StrikethroughOutlined />}>
                    <Link to="/admin/vip">Gói VIP</Link>                   
                </Menu.Item>
                <SubMenu key="sub1" icon={<SettingOutlined />} title="Quản trị">
                    <Menu.Item key="/admin/permission" icon={<FormOutlined />}>
                        <Link to="/admin/permission">Danh sách quyền</Link>                   
                    </Menu.Item>
                    <Menu.Item key="/admin/role" icon={<ApartmentOutlined />}>
                        <Link to="/admin/role">Chức vụ</Link>                   
                    </Menu.Item>
                    
                </SubMenu>
                <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Navigation Two">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </div>

    );
}

export default HeaderCmp;