import axios from 'axios'

const GET_USERS = 'GET_USERS'
const SET_SELECTED = 'SET_SELECTED'
const SET_ALL_CHECKED = 'SET_ALL_CHECKED'

const initialState = {
  users: [],
  selected: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_ALL_CHECKED: {
      if (action.status) {
        return { ...state, selected: action.user }
      }
      return {
        ...state,
        selected: []
      }
    }
    case SET_SELECTED: {
      if (action.status) {
        return { ...state, selected: [...state.selected, action.selected] }
      }
      return {
        ...state,
        selected: [...state.selected.filter((el) => el.id !== action.selected.id)]
      }
    }
    default:
      return {
        ...state
      }
  }
}

export function getUsers() {
  return (dispatch) => {
    axios('/api/v1/users').then(({ data }) => dispatch({ type: GET_USERS, users: data }))
  }
}

export const checkedUsers = (status, selected) => {
  return { type: SET_SELECTED, status, selected }
}

export const allUserChecked = (status, user) => {
  return { type: SET_ALL_CHECKED, status, user }
}
