import { connect } from "react-redux";
import AppComponent from "../components/App";

import * as actions from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: path => dispatch(actions.Push(path)),
    Logout: () => dispatch(actions.Logout()),
    ClearAppError: () => dispatch(actions.ClearAppError()),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

function mapStateToProps(state) {
  const { User, router, Global,Msal } = state;
  return {
    msalInstance: Msal.msalInstance,
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    userName: User.userName,
    firstName: User.firstName,
    lastName: User.lastName,
    pathname: router.location.pathname,
    search: router.location.search,
    hash: router.location.hash,
    submitting: Global.submitting,
    appSet: Global.appSet,
    appError: Global.appError,
    currentApp: Global.currentApp,
  };
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
