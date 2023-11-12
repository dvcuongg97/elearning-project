import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbNav from "../../component/BreadCrumbNav";
const { Header, Content, Sider } = Layout;

const items2 = [
    {
        key: `users`,
        icon: React.createElement(UserOutlined),
        label: <NavLink to={`/admin/user`} className='text-white hover:text-blue-300'>Quản lý người dùng</NavLink>,
        children: [ 
            {
                key: 'add user',
                label: <NavLink to={`/admin/user/add`} className='text-white'>Thêm người dùng</NavLink>,
            },
            {
                key: 'edit user',
                label: <NavLink to={`/admin/user/edit`} className='text-white'>Sửa người dùng</NavLink>,
            }
        ]
    },
    {
        key: `key2`,
        icon: React.createElement(LaptopOutlined),
        label: `tit 2`,
        children: [ 
            {
                key: 'key con 3',
                label: 'key con 3',
            },
            {
                key: 'key con 4',
                label: 'key con 4',
            }
        ]
    },
    {
        key: `key3`,
        icon: React.createElement(NotificationOutlined),
        label: `tit 3`,
        children: [ 
            {
                key: 'key con 5',
                label: 'key con 5',
            },
            {
                key: 'key con 6',
                label: 'key con 6',
            }
        ]
    },
    {
        key: `key4`,
        icon: React.createElement(NotificationOutlined),
        label: `tit 4`,
        children: [ 
            {
                key: 'key con 7',
                label: 'key con 7',
            },
            {
                key: 'key con 8',
                label: 'key con 8',
            }
        ]
    },
]


const AdminLayout = () => {
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
        <span className="text-white font-medium text-2xl">
          E Learning Admin
        </span>
        <button className="text-black bg-white rounded px-5 h-10 leading-10 shadow shadow-white">
          Log out
        </button>
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
