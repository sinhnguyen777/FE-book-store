import {
  ApartmentOutlined,
  CloudOutlined,
  ContainerOutlined,
  DollarOutlined,
  GiftOutlined,
  FormOutlined,
  HomeOutlined,
  InboxOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  StrikethroughOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

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
        style={{ fontSize: '17px', fontWeight: '600' }}
      >
        <Menu.Item key="/admin" icon={<HomeOutlined />}>
          <Link to={"/admin"}>Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/admin/cata" icon={<InboxOutlined />}>
          <Link to={"/admin/cata"}>Danh mục</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<CloudOutlined />} title="Quản lý sách">
          <Menu.Item key="/admin/products" icon={<ContainerOutlined />}>
            <Link to="/admin/products">Sách</Link>
          </Menu.Item>
          <Menu.Item key="/admin/best-product" icon={<DollarOutlined />}>
            <Link to="/admin/best-product">Sách bán chạy</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/admin/order" icon={<ShoppingCartOutlined />}>
          <Link to="/admin/order">Đơn Hàng</Link>
        </Menu.Item>
        <Menu.Item key="/admin/vip" icon={<StrikethroughOutlined />}>
          <Link to="/admin/vip">Gói VIP</Link>
        </Menu.Item>
        <Menu.Item key="/admin/coupon" icon={<GiftOutlined />}>
          <Link to="/admin/coupon">Mã giảm giá</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Quản trị">
          <Menu.Item key="/admin/Member" icon={<TeamOutlined />}>
            <Link to="/admin/Member">Admin</Link>
          </Menu.Item>
          <Menu.Item key="/admin/permission" icon={<FormOutlined />}>
            <Link to="/admin/permission">Danh sách quyền</Link>
          </Menu.Item>
          <Menu.Item key="/admin/role" icon={<ApartmentOutlined />}>
            <Link to="/admin/role">Chức vụ</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<TeamOutlined />} title="Quản lý người dùng">
          <Menu.Item key="9">
            <Link to="/admin/user">Danh sách người dùng</Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/admin/user-top">Top người dùng mua nhiều</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default HeaderCmp;
