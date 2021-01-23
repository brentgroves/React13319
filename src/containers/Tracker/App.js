import { connect } from "react-redux";
import AppComponent from "../../components/Tracker/App";

import * as actions from "../../actions";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    AuthenticateSaga: (email,password,route,setSubmittingOff) => dispatch(actions.AuthenticateSaga(email,password,route,setSubmittingOff)),
    Push: path => dispatch(actions.Push(path)),
    Logout: () => dispatch(actions.Logout()),
    ClearAppError: () => dispatch(actions.ClearAppError()),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

function mapStateToProps(state) {
  const { User, router, Global,Msal, Dialogs,ToolChangeSummary } = state;
  return {
    msalInstance: Msal.msalInstance,
    initials:Msal.initials,
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    userName: User.userName,
    firstName: User.firstName,
    lastName: User.lastName,
    pathname: router.location.pathname,
    search: router.location.search,
    hash: router.location.hash,
    submitting: Global.submitting,
    appError: Global.appError,
    // openDialog200206: Dialogs.openDialog200206,
    // openDialogToolChangeSummary: ToolChangeSummary.openDialogToolChangeSummary
  };
}

export const Tracker = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
