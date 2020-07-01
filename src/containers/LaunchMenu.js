import { connect } from 'react-redux';
import LaunchMenuComponent from '../components/LaunchMenu';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    AuthenticateSaga: (email, password, route, setSubmittingOff) =>
      dispatch(
        actions.AuthenticateSaga(email, password, route, setSubmittingOff),
      ),
    ClearAppError: () => dispatch(actions.ClearAppError()),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetCurrentApp: (app) => dispatch(actions.SetCurrentApp(app)),
  };
};

function mapStateToProps(state) {
  const { User, Global } = state;
  return {
    currentApp: Global.currentApp,
    appSet: Global.appSet,
    appError: Global.appError,
    isAuthenticated: User.isAuthenticated,
    roles: User.roles,
    submitting: Global.submitting,
  };
}

export const LaunchMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchMenuComponent);
