import React from 'react'
import {useState} from 'react'

export default function FilterControl() {
  // how do we keep track of the filterStatuese?
  const handleStatus = () => {
    const [filterStatus, setFilterStatus] = useState("all");
    setFilterStatus(status);
  }

  return (
    <div className = "item-statuses">
      <span onClick = {()=> handleStatus("all")}>All</span>
      <span onClick = {()=> handleStatus("active")}>Active</span>
      <span onClick = {()=> handleStatus("completed")}>Completed</span>
    </div>
  )
}