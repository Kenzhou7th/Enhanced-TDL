import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} text={todo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
};

export default TodoList;