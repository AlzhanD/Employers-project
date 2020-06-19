import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import usersData from './users'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    usersData
  })

export default createRootReducer
