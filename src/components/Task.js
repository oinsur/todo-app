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

  return (
    <div className="task-item">
      <div className="task-item-container">
        <div className="check" onClick={markCompleted}>
          <div className="check-mark">
            <img src="./images/icon-check.svg" alt="check icon"></img>
          </div>
        </div>

        <div className="task-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="remove-item">
        <img src="./images/icon-cross.svg" alt="cross icon"></img>
      </div>
    </div>
  )
}