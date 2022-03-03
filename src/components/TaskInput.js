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
              <input id="todo-input" type="text" placeholder='Create a new todo' />
            </form>
          </div>
    </div>
  )
}

