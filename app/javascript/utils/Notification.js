import React from "react"
import { notification } from "antd"

export default function Notification(props){
  const type = props.success ? 'success' : 'error'
  return(
    notification[type]({
      message: props.message,
      duration: 2
    })
  )
}
