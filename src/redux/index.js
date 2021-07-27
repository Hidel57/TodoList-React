import { combineReducers } from "redux";
import todoReducer from "./todoReducer"
import todosReducer from "./todosReducer"
import visibilityFilter from "./visibilityFilter"
import modalReducer from "./modalReducer"

const rootReducer = combineReducers({
  todoReducer,
  todosReducer,
  visibilityFilter,
  modalReducer
})

export default rootReducer
