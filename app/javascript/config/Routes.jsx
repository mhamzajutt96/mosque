import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Analytics from "../components/home/Analytics";
import ExpenseList from "../components/expenses/ExpenseList";
import { Menu } from "antd";

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