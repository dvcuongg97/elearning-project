import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
let IconDashboard = () => {
  return (
    <span>
      <i className="fa fa-home"></i> Trang chủ
    </span>
  );
};
let routes = [
  {
    path: "/",
    breadcrumb: IconDashboard,
  },
  {
    path: "/admin/user",
    breadcrumb: " Quản lý người dùng",
  },
  {
    path: "/admin/khoahoc",
    breadcrumb: " Quản lý khóa học",
  },
];

export default function BreadCrumbNav() {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <Breadcrumb className="p-5">
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        return (
          <Breadcrumb.Item key={index}>
            <NavLink to={match.pathname}>{breadcrumb}</NavLink>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
