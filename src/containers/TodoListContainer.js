import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../redux/visibilityFilter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.state)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.state)
    default: new Error('Unknown filter: ', filter)
  }
}

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const TodoListContainer = connect(mapStateToProps)(TodoList)

export default TodoListContainer