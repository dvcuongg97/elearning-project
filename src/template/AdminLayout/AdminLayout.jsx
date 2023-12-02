import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbNav from "../../component/BreadCrumbNav";
import { userLocalStorage } from "../../api/localService";
const { Header, Content, Sider } = Layout;

const items2 = [
    {
        key: `users`,
        icon: React.createElement(UserOutlined),
        label: <NavLink to={`/admin/user`} className='text-black hover:text-blue-300 text-lg font-bold'>Quản lý người dùng</NavLink>,
    },
    {
        key: `khoahoc`,
        icon: React.createElement(LaptopOutlined),
        label: <NavLink to={`/admin/khoahoc`} className='text-black hover:text-blue-300 text-lg font-bold'>Quản lý khóa học</NavLink>,
    },
]

const AdminLayout = () => {
  let handleLogout = () => { 
    userLocalStorage.remove()
    window.location.href="/"
 }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 300
        }}
      >
        <span className="text-white font-medium text-2xl italic">
          E Learning Admin
        </span>
        <span>
          <span className="text-blue-100 px-5 h-10 text-lg font-bold">Chào {userLocalStorage.get().hoTen}</span> 
        <NavLink to={"/"}><button className="text-blue-500 bg-white px-5 h-10 leading-10 shadow shadow-white rounded-full font-bold" onClick={handleLogout}>Đăng xuất</button></NavLink>
        </span>
      </Header>
      <Layout>
        <Sider
          theme="dark"
          width={250}
          // style={{
          //   background: colorBgContainer,
          // }}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
           className="site-layout"
           style={{
             marginLeft: 250,
           }}
          // style={{
          //   padding: "0 24px 24px",

          // }}
        >
          <BreadCrumbNav />

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
