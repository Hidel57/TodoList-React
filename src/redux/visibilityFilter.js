export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

/*
* ACTION TYPES
*/

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* REDUCER
*/

const visibilityFilter = (state=SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default: return state
  }
}

export default visibilityFilter

/*
* ACTIONS
*/

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER, filter
})
