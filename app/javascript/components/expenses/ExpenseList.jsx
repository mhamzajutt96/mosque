import React, { useEffect, useState } from "react"
import axios from "axios"
import { Layout, Table } from "antd"
const { Content } = Layout

export default function ExpenseList(props) {
  const [loading, isLoading] = useState(true)
  const [expenseList, setExpenseList] = useState({})

  // function createExpenseList(param) {
  //   param
  // }

  useEffect(() => {
    if (props.length === 0) {
      const expenses = props.expenses.map((expense) => ({
        key: expense.id,
        referenceId: expense.reference_id,
        expenseType: expense.expense_type
      }))
      setExpenseList({expenses})
    } else {
      axios({method: 'get', url: 'api/v1/expenses'})
        .then((response) => {
          console.log(response)
          const expenses = response.data.results.map((expense) => ({
            key: expense.id,
            referenceId: expense.reference_id,
            expenseType: expense.expense_type
          }))
          setExpenseList({expenses});
        })
    }
  })

  const columns = [{
    title: 'Reference ID',
    dataIndex: 'referenceId',
    key: 'referenceId',
  },{
    title: 'Expense Type',
    dataIndex: 'expenseType',
    key: 'expenseType',
  }]

  return(
    <Layout className="layout">
      <Content>
        <div className="expenses-container">
          {/*<Table dataSource={expenseList} columns={columns} />*/}
        </div>
      </Content>
    </Layout>
  )
}