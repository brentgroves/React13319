import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from './Global'
import User from './User'
import Sproc200206 from './Sproc200206'
import Sproc200221 from './Sproc200221'
import Dialogs from './Dialogs'
import Kep13319 from './Kep13319'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  User,
  Sproc200206,
  Sproc200221,
  Dialogs,
  Kep13319
})

export default RootReducer
