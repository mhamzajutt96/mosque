import React from "react"
import { Layout } from "antd"
import Sidebar from "./home/Sidebar"
import Index from "./expenses/Index"

const { Content } = Layout

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Index />
      </Content>
    </Layout>
  )
}