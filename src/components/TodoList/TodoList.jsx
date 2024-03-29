import React from 'react';
import './styles.css';

function TodoList({ children }) {
  return <ul className="todoList">{children}</ul>;
}

export { TodoList };
