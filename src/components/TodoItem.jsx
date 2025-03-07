import React, { useState } from 'react';

const TodoItem = ({ index, text, completed, updateTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  const handleToggleClick = () => {
    toggleTodo(index);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
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
      <button onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default TodoItem;