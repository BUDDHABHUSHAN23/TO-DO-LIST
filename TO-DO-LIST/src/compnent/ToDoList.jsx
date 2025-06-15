import React from 'react'

export default function ToDoList() {
   // Here we can add the list
    let todos =[                  // this are the demo files 
      "Add a task", 
      "GO to the market place ",
      "Go to the gym",
    ] 
  return (
    <ul className='main'>
     {todos.map((todo, todoIndex) => {            // here we can add the list  with both todo anf index 
        return (
        <li key = {todoIndex}>{todo}</li>   //providing the key for the every list 
        )
     })}
    </ul>
  )
}
