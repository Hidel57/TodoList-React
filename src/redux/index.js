import { combineReducers } from "redux";
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"
import modal from "./modal"

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  modal
})

export default rootReducer