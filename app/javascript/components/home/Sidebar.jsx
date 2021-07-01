import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import App from "../App"
import ExpenseList from "../expenses/ExpenseList";

const { Sider } = Layout

export default function Sidebar() {
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Layout>
      <Sider>
        <Router>
          <div>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">Mosque</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="api/v1/expenses">Expenses</Link>
              </Menu.Item>
            </Menu>
            <Switch>
              <Route path="api/v1/expenses">
                <ExpenseList />
              </Route>
            </Switch>
          </div>
        </Router>
      </Sider>
    </Layout>
  )
}