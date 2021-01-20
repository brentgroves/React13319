import { connect } from 'react-redux'
import ToolbarAvatarComponent from '../components/ToolbarAvatar'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    SetCurrentApp: (app) => dispatch(actions.SetCurrentApp(app)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity)),
    Logout: () => dispatch(actions.Logout())
  }
}

function mapStateToProps(state) {
  const { Global,User,Msal } = state
  return {
    msalInstance: Msal.msalInstance,
    name:Msal.name,
    initials:Msal.initials,
    department: Msal.department,
    companyName:Msal.companyName,
    isAuthenticated: User.isAuthenticated,
    currentApp: Global.currentApp,
    appSet: Global.appSet
  }
}

export const ToolbarAvatar = connect(mapStateToProps, mapDispatchToProps)(ToolbarAvatarComponent)
/*
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance
  };

*/