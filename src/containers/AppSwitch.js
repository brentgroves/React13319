import { connect } from "react-redux";
import AppSwitchComponent from "../components/AppSwitch";

import * as actions from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    SetIsAuthenticated: (isAuthenticated) => dispatch(actions.SetIsAuthenticated(isAuthenticated)),
    SetAccount: (account) => dispatch(actions.SetAccount(account)),
    SetGraph: (graph) => dispatch(actions.SetGraph(graph)),
    SetGroups: (groups) => dispatch(actions.SetGroups(groups)),
    SetProfile: (profile) => dispatch(actions.SetProfile(profile)),
    SetDepartment: (department) => dispatch(actions.SetDepartment(department)),
    Push: path => dispatch(actions.Push(path)),
    Logout: () => dispatch(actions.Logout()),
    ClearAppError: () => dispatch(actions.ClearAppError()),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

function mapStateToProps(state) {
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance
  };
}

export const AppSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppSwitchComponent);
