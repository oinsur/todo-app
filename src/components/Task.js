import React from 'react'
import { useState } from 'react'
import Check from '../images/icon-check.svg'

export default function Task({text, task}) {

  // create a state variable to keep track of mutable tasks
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (<img src={Check} alt="done"/>) : "";
  

  const markCompleted = () => {
    // when the task is clicked, CSS should be marked
    // task status should be switched
    // pull in the task in this function
    // get access to the stats and switch the boolean
    // update the mutableTask with the new status
    // set the status of the task to the opposite boolean
    setMutableTask({...mutableTask, status: !mutableTask.status});
  }
  // create a variable to make the CSS of the cross-icon active
  const makeActive = (e) => {
    // e.target.style.background = "#5a61af";
  }
  const makeInactive = (e) => {
    // e.target.style.background = "none";
  }

  return (
    // onMouseOver is the hover event
    <div className="task-item">
      <div className="task-text-container">
        <div className="check" onClick={markCompleted}>
          <div className={`check-mark ${checked}`} >
            {checkIcon}
          </div>
        </div>

        <div className = {`task-text ${checked}`}>
          <p>{text}</p>
        </div>
      </div>
      <div className="remove-item" onMouseLeave = {makeInactive}>
        <img src="./images/icon-cross.svg" alt="cross icon" onMouseLeave = {makeInactive}></img>
      </div>
    </div>
  )
}