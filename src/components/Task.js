import React from 'react'
import { useState } from 'react'

export default function Task({text, task}) {

  // create a state variable to keep track of mutable tasks
  const [mutableTask, setMutableTask] = useState(task);

  const markCompleted = () => {
    // when the task is clicked, CSS should be marked
    // task status should be switched
    // pull in the task in this function
  }
  // create a variable to make the CSS of the cross-icon active
  const makeActive = (e) => {
    e.target.style.background = "#5a61af";
  }
  const makeInactive = (e) => {
    e.target.style.background = "none";
  }

  return (
    // onMouseOver is the hover event
    <div className="task-item" onMouseOver={makeActive} onMouseLeave = {makeInactive}>
      <div className="task-text-container" onMouseLeave = {makeInactive}>
        <div className="check" onClick={markCompleted}>
          <div className="check-mark">
            <img src="./images/icon-check.svg" alt="check icon"></img>
          </div>
        </div>

        <div className="task-text" onMouseLeave = {makeInactive}>
          <p onMouseLeave = {makeInactive}>{text}</p>
        </div>
      </div>
      <div className="remove-item" onMouseLeave = {makeInactive}>
        <img src="./images/icon-cross.svg" alt="cross icon" onMouseLeave = {makeInactive}></img>
      </div>
    </div>
  )
}