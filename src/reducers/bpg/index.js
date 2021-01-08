import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from '../Global'
import Msal from '../Msal'
import User from './User'
import Sproc200206 from './Sproc200206'
import Sproc200221 from './Sproc200221'
import Dialogs from './Dialogs'
import Kep13319 from './Kep13319'
import CompareContainer from './CompareContainer'
import PartProdRate from './PartProdRate'
import UpcomingToolChanges from './UpcomingToolChanges'
import ToolChangeSummary from './ToolChangeSummary'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  Msal,
  User,
  Sproc200206,
  Sproc200221,
  Dialogs,
  Kep13319,
  CompareContainer,
  PartProdRate,
  UpcomingToolChanges,
  ToolChangeSummary
})

export default RootReducer
