import './App.css';
import React, { useState } from 'react';
import Todo from './Todo'

const initialState = ["clean kitchen", "do the dishes", "programming"]

function App() {
  const [todos, setTodos] = useState(initialState)
  const [inputValue, setInputValue] = useState("")
  return (
    <div>
      <p>Todo List </p>
      <input value={inputValue} onChange={
        (event) => {
          setInputValue(event.target.value)
        }
      }></input>
      <button onClick={(e) => {
        setTodos([...todos, inputValue])
        //clean up the field
        setInputValue("")
      }}>Add Todo</button>
      {todos.map(todo => <Todo todo={todo}></Todo>)}
    </div>
  )
}

export default App;
