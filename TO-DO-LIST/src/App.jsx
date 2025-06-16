import React from 'react'
import { useState , useEffect } from 'react'
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
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
function handleTodoAdd(newTodo) {
  const newTodosList = [...todos, newTodo];
  setTodos(newTodosList);
  persistData(newTodosList);
}

function handleDeleteTodo(index) {
  const newTodosList = todos.filter((_, todoIndex) => todoIndex !== index);
  setTodos(newTodosList);
  persistData(newTodosList);
}

function handleEditTodo(index) {
  const valueToBeChanged = todos[index];
  setTodoValue(valueToBeChanged);
  handleDeleteTodo(index); // This already persists
}

    useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleTodoAdd ={handleTodoAdd} />
      <ToDoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo}/>  
    </>
  )
}

export default App
