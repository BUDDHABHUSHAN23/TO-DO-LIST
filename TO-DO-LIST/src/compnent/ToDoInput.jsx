import React, { useState } from 'react';

export default function ToDoInput(props) {
  const { handleTodoAdd } = props;
  const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <h5 className='todoheader'>TO-DO-LIST</h5>
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        type="text" 
        placeholder="Add a task" 
      />
      <button onClick={() => {
        setTodoValue('');
        handleTodoAdd(todoValue);

      }}>
        Add
      </button>
    </header>
  );
}
