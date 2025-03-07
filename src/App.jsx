import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Sample Task 1', 'Sample Task 2']);

  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index] = newText;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React TODO App</h1>
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;