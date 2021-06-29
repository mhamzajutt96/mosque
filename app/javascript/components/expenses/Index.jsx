import React from "react"
import { Layout, Table } from "antd"
const { Content } = Layout

export default function Index(props) {
  const columns = [{
    title: 'Reference ID',
    dataIndex: 'referenceId',
    key: 'referenceId',
  },{
    title: 'Expense Type',
    dataIndex: 'expenseType',
    key: 'expenseType',
  }]

  let expenses = {}
  const dataSource = props.expenses.map((expense) => ({
    key: expense.id,
    referenceId: expense.reference_id,
    expenseType: expense.expense_type
  }))

  return(
    <Layout className="layout">
      <Content>
        <div className="expenses-container">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Content>
    </Layout>
  )
}