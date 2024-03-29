import React from 'react';
import './styles.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Escribe tu tarea aquí"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };
