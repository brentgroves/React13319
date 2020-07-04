import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from '../Global'
import User from './User'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  User
})

export default RootReducer
