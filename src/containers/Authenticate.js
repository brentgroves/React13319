import { connect } from "react-redux";
import AuthenticateComponent from "../components/Authenticate";

import * as actions from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    SetAccount: (account) => dispatch(actions.SetAccount(account)),
    SetGraph: (graph) => dispatch(actions.SetGraph(graph)),
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

export const Authenticate = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateComponent);
