import { connect } from "react-redux";
import ProfileContentComponent from "../components/ProfileContent";

import * as actions from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    SetIsAuthenticated: (isAuthenticated) => dispatch(actions.SetIsAuthenticated(isAuthenticated)),
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

export const ProfileContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContentComponent);
