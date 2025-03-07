import React, { useState } from 'react';

const TodoItem = ({ index, text, completed, updateTodo, deleteTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTodo(index);
  };

  const handleToggleClick = () => {
    toggleTodo(index);
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="todo-text">
        <input type="checkbox" checked={completed} onChange={handleToggleClick} />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span>{text}</span>
        )}
      </div>
      <div className="todo-buttons">
        <button className="edit-button" onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;