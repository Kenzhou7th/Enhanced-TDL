import React, { useState } from 'react';

const TodoItem = ({ index, text, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li>
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