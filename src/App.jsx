import { useState } from 'react';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoTitle } from './components/TodoTitle/TodoTitle';

const defaultTodos = [
  {
    text: 'Aaaaaaaaaaa',
    completed: true,
  },
  {
    text: 'Bbbbbbbbbb',
    completed: false,
  },
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  return (
    <>
      <TodoTitle completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
