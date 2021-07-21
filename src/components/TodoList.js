import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const { filteredTodos, settodo } = props
  return (
    <div className="cards-container">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          settodo={settodo} // no jala undefined
        />
      ))}
    </div>
  )
}

export default TodoList
