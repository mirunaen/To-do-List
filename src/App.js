import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './Todo'

//intial value of todos gonna be whatever is in local storage

function getTodoFromLocalStorage() {

  let todoString = localStorage.getItem('todos')
  if (todoString.length > 0) {
    return todoString.split(',')
  } else {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(getTodoFromLocalStorage())
  const [inputValue, setInputValue] = useState("")

  function removeTodo(todo) {
    setTodos(todos.filter((td) => (td !== todo)))
  }
  // use effect will be called 
  //when the second argument will get updated(in this case, todos)
  //so setTodos will be called and after that useEffect
  useEffect(() => {
    localStorage.setItem('todos', todos)
  }, [todos])
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
      {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo}></Todo>)}
    </div>
  )
}

export default App;
