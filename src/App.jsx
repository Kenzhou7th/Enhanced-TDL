import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

// Variables for todos, filter, and dark mode
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Function for adding tasks
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  // Function for editing tasks
  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  // Function for deleting tasks
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  //To show tasks in completed part, pending part, and all part
  const filteredTodos = todos.filter(todo => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Pending') return !todo.completed;
    if (filter === 'All') return true;
    return true;
  });

  //This is so when you click the buttons, it will show you tasks related for that button
  return (
    <div className="App">
      <div className="todo-container">
        <h1>Enhanced To Do List App</h1>
        <div className="filter-buttons">
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('Completed')}>Completed</button>
          <button onClick={() => setFilter('Pending')}>Pending</button>
          <button
            className={darkMode ? 'light-mode-button' : 'dark-mode-button'}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <TodoList
          todos={filteredTodos}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;