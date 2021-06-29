import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Layout, Menu } from "antd"

const { Sider } = Layout

export default function Sidebar() {
  return (
    <Layout>
      <Sider>
        <Router>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/">Mosque</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/expenses">Expenses</Link>
            </Menu.Item>
          </Menu>
        </Router>
      </Sider>
    </Layout>
  )
}