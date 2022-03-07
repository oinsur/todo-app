import React from 'react'
import {useState} from 'react'

// How do we add neww Todo item to the list?
// Take whatever is type in
// How do we keep track of what we typed in the input?
// and push it to the list

export default function TaskInput({tasks, setTasks}) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    if(input){

      const newTask = {
        id: 7,
        text: input,
        status: false
      }
      setTasks([newTask,...tasks])
    }
    // create a new todo object
  }
  return (
    <div className="task-input">
      <div className="check">
        <div className="check-mark">
         <img src="./images/icon-check.svg" alt="check-icon"></img>
        </div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={handleForm}>
          <input onChange = {handleChange} id="todo-input" type="text" placeholder='Create a new todo' />
        </form>
      </div>
    </div>
  )
}

