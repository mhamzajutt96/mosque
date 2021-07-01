import React, { useEffect, useState } from "react"
import axios from "axios"
import { Table, Popconfirm } from "antd"
import Notification from "../../utils/Notification"

export default function ExpenseList(props) {
  const [loading, isLoading] = useState(true)
  const [expenseList, setExpenseList] = useState({})

  function createExpenseList(expenses) {
    const expenseArray = expenses.map((expense) => ({
      key: expense.id,
      id: expense.id,
      amount: expense.amount,
      reason: expense.reason
    }))
    setExpenseList({expenseArray})
  }

  function deleteExpense(expense_id) {
    axios({method: 'delete', url: `api/v1/expenses/${expense_id}`})
      .then((response) => {
        Notification(response.data)
      })
  }

  useEffect(() => {
    if (props.length === 0) {
      createExpenseList(props.expenses)
    } else {
      axios({method: 'get', url: 'api/v1/expenses'})
        .then((response) => {
          createExpenseList(response.data)
        })
    }
  }, [])

  const columns = [{
    title: 'Reason',
    dataIndex: 'reason',
    key: 'reason',
  },{
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },{
    title: "",
    key: "action",
    render: (_text, record) => (
      <Popconfirm
        title="Are you sure to delete this expense?"
        onConfirm={() => deleteExpense(record.id)} okText="Yes" cancelText="No">
        <a href="#" type="danger">
          Delete{" "}
        </a>
      </Popconfirm>
    )
  }]

  return(
    <div className="expenses-container">
      <h1>Expenses</h1>
      <Table className="table-striped-rows" dataSource={expenseList.expenseArray} columns={columns} />
    </div>
  )
}