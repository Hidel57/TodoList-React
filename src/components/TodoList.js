import TodoItem from './TodoItem';

const TodoList = ({ filteredTodos, settodo }) => {
  return (
    <div className="cards-container">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          settodo={settodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
