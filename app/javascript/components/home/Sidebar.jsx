import React from "react"
import { Layout } from "antd"
import Routes from "../../config/Routes";

export default function Sidebar() {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <Routes />
    </Layout.Sider>
  )
}