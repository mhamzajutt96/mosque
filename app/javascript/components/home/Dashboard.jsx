import React from "react"
import {Route, Switch} from "react-router-dom";
import Analytics from "./Analytics";
import ExpenseList from "../expenses/ExpenseList";

export default function Dashboard() {
  return(
    <div>
      <Switch>
        <Route path="/" exact component={Analytics} />
      </Switch>
      <Switch>
        <Route path="/api/v1/expenses" exact component={ExpenseList} />
      </Switch>
    </div>
  )
}
