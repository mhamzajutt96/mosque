import React from "react"
import { Form, Input, InputNumber, Button } from 'antd'
import axios from "axios";
import Notification from "../../utils/Notification"
import { useHistory } from 'react-router-dom';

export default function NewExpense() {
  const history = useHistory()

  const handleFinish = (values) => {
    axios.post('/api/v1/expenses', values)
      .then((response) => {
        if (response.data.success) {
          Notification(response.data)
          history.push('/api/v1/expenses')
        } else {
          Notification(response.data)
        }
      })
  }

  const formItemLayout = {
    labelCol: {
      xs: {span: 3},
      sm: {span: 3},
      md: {span: 3},
      lg: {span: 3}
    },
    wrapperCol: {
      xs: {span: 21},
      sm: {span: 21},
      md: {span: 21},
      lg: {span: 21}
    },
  };

  return(
    <div className="new-expense-form">
      <h1 className="expenses-heading">Add new expense</h1>
      <hr/>
      <Form {...formItemLayout} onFinish={handleFinish}>
        <Form.Item
          label="Add expense reason"
          name="reason"
          rules={[{ required: true, message: 'Please input the reason!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Add expense amount">
          <Form.Item name="amount" >
            <InputNumber
              min={1}
              rules={[{ required: true, message: 'Please input the amount!' }]}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}