import React from 'react'
import ReactDOM from 'react-dom'
import App from "../components/App"

const Index = () => ( <App /> )

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('application')
  )
})
