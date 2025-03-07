import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          text={todo.text}
          completed={todo.completed}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;