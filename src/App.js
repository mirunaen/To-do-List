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
  //and update the local storage values 
  useEffect(() => {
    localStorage.setItem('todos', todos)
  }, [todos])
  return (
    <div id="app">
      <h1 className="todos-title">To-do List</h1>
      <div className="input-row">
        <input
          className="add-todo-input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          className="submit-button"
          onClick={(e) => {
            if (inputValue && inputValue.length > 0) {
              // add todo
              setTodos([...todos, inputValue]);
              // clean up the field
              setInputValue("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
      <p>
        You have <strong>{todos.length}</strong> tasks in progress
      </p>
    </div>

  );
}
export default App;
