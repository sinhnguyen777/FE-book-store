import React, { useState } from 'react';
import { Menu, Button } from 'antd';

import {
    InboxOutlined,
    ContainerOutlined,
    ShoppingCartOutlined,
    HomeOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const HeaderCmp = (props) => {

    return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={props.collapsed}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<InboxOutlined />}>
                    Catalog
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                   Book
                </Menu.Item>
                <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
                   Order
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