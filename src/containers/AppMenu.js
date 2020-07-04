import { connect } from 'react-redux'
import AppMenuComponent from '../components/AppMenu'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    SetCurrentApp: (app) => dispatch(actions.SetCurrentApp(app)),
    Logout: () => dispatch(actions.Logout())
  }
}

function mapStateToProps(state) {
  const { Global } = state
  return {
    currentApp: Global.currentApp,
    appSet: Global.appSet
  }
}

export const AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenuComponent)
