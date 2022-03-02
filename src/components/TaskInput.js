import React from 'react'

export default function TaskInput() {
  return (
    <div className="TaskInput">
      <div className="check">
            <div className="check-mark">

            </div>
          </div>
          <div className="new-todo-input">
            <form action="">
              <input type="text" placeholder='Create new todo' />
            </form>
          </div>
    </div>
  )
}

