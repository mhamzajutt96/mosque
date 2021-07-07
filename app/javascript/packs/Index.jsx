import React from 'react'
import ReactDOM from 'react-dom'
import App from "../components/App"
import {BrowserRouter as Router} from "react-router-dom";

function Index() {
  return(
    <Router>
      <App />
    </Router>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('application')
  )
})
