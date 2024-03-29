import React from 'react';
import './styles.css';

function TodoTitle({ total, completed }) {
  return (
    <h1 className="todoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TO-DOs
    </h1>
  );
}

export { TodoTitle };
