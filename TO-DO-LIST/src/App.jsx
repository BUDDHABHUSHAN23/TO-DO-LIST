import React from 'react'
import { useState } from 'react'
import ToDoCard from './compnent/ToDoCard'
import ToDoInput from './compnent/ToDoInput'
import ToDoList from './compnent/ToDoList'


function App() {
  //  let todos = [
  //   "Add a task", 
  //   "Go to the market place",
  //   "Go to the gym",
  // ];

  const [todos, setTodos] = useState([
  ]);

  function handleTodoAdd(newTodo) {
    const newTodosList = setTodos([...todos, newTodo]);
    setTodos = {newTodosList};
  }

  function handleDeleteTodo(index){
    const newTodosList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;  // this allows to stay in the array 
    })
    setTodos(newTodosList)
  }


  function handleEditTodo(index){

  }

  return (
    <>
      <ToDoInput handleTodoAdd ={handleTodoAdd} />
      <ToDoList handleDeleteTodo={handleDeleteTodo} todos={todos} />  
    </>
  )
}

export default App
