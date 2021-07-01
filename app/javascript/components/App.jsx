import React from "react"
import {Col, Layout, Row} from "antd"
import 'antd/dist/antd.css'
import Sidebar from "./home/Sidebar"
import Dashboard from "./home/Dashboard"

const { Content } = Layout

export default function App() {
  return (
    <Layout>
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <Content>
            <Dashboard />
          </Content>
        </Col>
      </Row>
    </Layout>
  )
}
