import React from "react"
import { Link } from "react-router-dom"
import { Menu } from "antd"

export default function Routes() {
  return(
    <div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Mosque</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/api/v1/expenses">Expenses</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}