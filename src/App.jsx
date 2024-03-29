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
  return (
    <>
      <TodoTitle completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
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
