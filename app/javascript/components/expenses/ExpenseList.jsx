import React, { useEffect, useState } from "react"
import axios from "axios"
import {Table, Popconfirm, Row, Col} from "antd"
import Notification from "../../utils/Notification"
import { Link } from "react-router-dom"

export default function ExpenseList(props) {
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
    axios({method: 'delete', url: `/api/v1/expenses/${expense_id}`, responseType: 'json'})
      .then((response) => {
        fetchExpenses()
        Notification(response.data)
      })
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  function fetchExpenses() {
    axios({method: 'get', url: '/api/v1/expenses', headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer'
    }})
      .then((response) => {
        console.log(response)
        // createExpenseList(response.data.data)
      })
  }

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
      <Row>
        <Col span={12}>
          <h1 className="expenses-heading">Expenses</h1>
        </Col>
        <Col span={12}>
          <Link to="/api/v1/expenses/new">Add new expense</Link>
        </Col>
      </Row>
      <Table className="table-striped-rows" dataSource={expenseList.expenseArray} columns={columns} />
    </div>
  )
}