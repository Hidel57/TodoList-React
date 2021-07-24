import { readTask } from '../services'

/*
* ACTION TYPES
*/

const READ_TODO = 'READ_TODO'
const CLEAR_TODO = 'CLEAR_TODO'

/*
* REDUCER
*/
const todoForm = {
  id: '',
  title: '',
  text: ''
}
const todo = (state = todoForm, action) => {
  switch (action.type) {
    case READ_TODO:
      const todo = readTask(action.id)
      return {
        id: todo.id,
        title: todo.title,
        text: todo.text
      }
    case CLEAR_TODO:
      return {
          id: '',
          title: '',
          text: '',
        }
    default: return state
  } 
}

/*
* ACTIONS
*/

export const readTodo = (id) => ({ type: READ_TODO, id })
export const clearTodo = () => ({ type: CLEAR_TODO })

export default todo
