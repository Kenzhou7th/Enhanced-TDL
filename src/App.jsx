import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Sample Task 1', completed: false },
    { text: 'Sample Task 2', completed: false }
  ]);

  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React TODO App</h1>
      <TodoList todos={todos} updateTodo={updateTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;