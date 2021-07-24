import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../redux/visibilityFilter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default: new Error('Unknown filter: ', filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  filteredTodos: getVisibleTodos(state.todos, ownProps.filter)
})

const TodoListContainer = connect(mapStateToProps)(TodoList)

export default TodoListContainer