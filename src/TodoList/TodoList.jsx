import React, { useState } from 'react';
import './TodoList.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleButton = (t) => {
    todos.pop(t)
    setTodos([...todos])
    setInputValue("")
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos?.map(todo => (
          <li key={todo}>{todo} <button onClick={(todo)=>handleButton(todo.target.value)}>X</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
