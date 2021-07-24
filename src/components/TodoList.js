import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const { filteredTodos } = props
  return (
    <div className="cards-container">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList
