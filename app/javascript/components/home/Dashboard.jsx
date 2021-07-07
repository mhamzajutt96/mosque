import React from "react"
import { Route, Switch } from "react-router-dom"
import Analytics from "./Analytics"
import ExpenseList from "../expenses/ExpenseList"
import NewExpense from "../expenses/NewExpense"

export default function Dashboard() {
  return(
    <div>
      <Switch>
        <Route path="/" exact component={Analytics} />
      </Switch>
      <Switch>
        <Route path="/api/v1/expenses" exact component={ExpenseList} />
      </Switch>
      <Switch>
        <Route path="/api/v1/expenses/new" exact component={NewExpense} />
      </Switch>
    </div>
  )
}
