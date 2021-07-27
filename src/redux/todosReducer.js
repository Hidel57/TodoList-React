import { createTask } from '../services'
import { readTasks } from '../services'
import { updateTask } from '../services'
import { deleteTask } from '../services'
import { changeStateTask } from '../services'

/*
* ACTION TYPES
*/

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

/*
* REDUCER
*/

const todos = (state = readTasks(), action) => {
  switch (action.type) {
    case ADD_TODO:
      createTask(action.todo.title, action.todo.text)
      return [
        ...state,
        {
          id: Date.now(),
          title: action.todo.title,
          text: action.todo.text,
          completed: false
        }
      ]
    case EDIT_TODO:
      updateTask(action.id, action.todo.title, action.todo.text)
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, title: action.todo.title, text: action.todo.text } :
          todo
      )
    case DELETE_TODO:
      deleteTask(action.id)
      return state.filter(todo => todo.id !== action.id)
    case COMPLETE_TODO:
      changeStateTask(action.id)
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
        )
    default: return state
  } 
}

/*
* ACTIONS
*/

export const addTodo = (todo) => ({ type: ADD_TODO, todo })
export const editTodo = (id, todo) => ({ type: EDIT_TODO, id, todo })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const completeTodo = (id) => ({ type: COMPLETE_TODO, id })

export default todos
