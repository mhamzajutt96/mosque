import React from 'react'
import ReactDOM from 'react-dom'
import App from "../components/App"

function Index() { return(<App />) }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('application')
  )
})
