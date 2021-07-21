/*
* ACTION TYPES
*/

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

/*
* REDUCER
*/

const Modal = (state=false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return state = action.state
    case HIDE_MODAL:
      return action.state = false
    default: return state
  }
}

export default Modal

/*
* ACTIONS
*/

export const toggleModal = state => ({
  type: SHOW_MODAL, state
})
