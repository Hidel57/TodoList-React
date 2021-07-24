import { combineReducers } from "redux";
import todo from "./todo"
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"
import modal from "./modal"

const rootReducer = combineReducers({
  todo,
  todos,
  visibilityFilter,
  modal
})

export default rootReducer