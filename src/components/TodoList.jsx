import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, addTodo, updateTodo, deleteTodo, toggleTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddClick = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  // Container for the add new task text field and add button
  return (
    <div className="todo-container">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-button" onClick={handleAddClick}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            text={todo.text}
            completed={todo.completed}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;