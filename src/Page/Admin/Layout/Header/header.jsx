import React, { useState } from 'react';
import { Menu, Button } from 'antd';

import {
    InboxOutlined,
    ContainerOutlined,
    ShoppingCartOutlined,
    HomeOutlined,
} from '@ant-design/icons';

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
                    <Link to="/admin">Home</Link>
                </Menu.Item>
                <Menu.Item key="/admin/cata" icon={<InboxOutlined />}>
                    <Link to="/admin/cata">Catalog</Link>
                </Menu.Item>
                <Menu.Item key="/admin/products" icon={<ContainerOutlined />}>
                    <Link to="/admin/products">Book</Link>
                </Menu.Item>
                <Menu.Item key="/admin/order" icon={<ShoppingCartOutlined />}>
                    <Link to="/admin/order">Order</Link>                   
                </Menu.Item>
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