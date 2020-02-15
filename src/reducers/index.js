import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from './Global'
import User from './User'
import Sproc from './Sproc'
import Dialogs from './Dialogs'
import DS13318 from './DS13318'
import Kep13313 from './Kep13318'
import HourlyOEEValues from './HourlyOEEValues'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  User,
  Sproc,
  Dialogs,
  DS13318,
  Kep13313,
  HourlyOEEValues
})

export default RootReducer
