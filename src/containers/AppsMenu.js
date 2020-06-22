import { connect } from 'react-redux'
import AppsMenuComponent from '../components/AppsMenu'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    SetCurrentApp: (app) => dispatch(actions.SetCurrentApp(app)),
    Logout: () => dispatch(actions.Logout())
  }
}

function mapStateToProps(state) {
  const { User,Global,router } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    userName: User.userName,
    firstName: User.firstName,
    lastName: User.lastName,
    pathname: router.location.pathname,
    search: router.location.search,
    hash: router.location.hash,
    currentApp: Global.currentApp,
    appSet: Global.appSet
  }
}

export const AppsMenu = connect(mapStateToProps, mapDispatchToProps)(AppsMenuComponent)
