import React from 'react'

export default function Task({text}) {
  return (
    <div className="task-item">
      <div className="check">
        <div className="check-mark">
          <img src="./images/icon-check.svg" alt="check icon"></img>
        </div>
      </div>

      <div className="task-text">
        <p>{text}</p>
      </div>
    </div>
  )
}