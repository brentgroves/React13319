import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from './Global'
import User from './User'
import Sproc from './Sproc'
import Dialogs from './Dialogs'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  User,
  Sproc,
  Dialogs,
})

export default RootReducer
