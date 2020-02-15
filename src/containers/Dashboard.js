import { connect } from "react-redux";
import DashboardComponent from "../components/Dashboard";
//import { push } from "connected-react-router";
import * as actions from '../actions'


function mapStateToProps(state) {
  const { User } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin
  }
}
// CAN'T GET THIS TO WORK WHEN PASSING PUSH. PUSH STOPS WORKING HERE

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  AuthenticateSaga: (user) => dispatch(actions.AuthenticateSaga(user)),
  ClearAuthenticateError: () => dispatch(actions.ClearAuthenticateError()),
  LogoutSaga: () => dispatch(actions.LogoutSaga()),
  Push: (path) => dispatch(actions.Push(path))
  }
}

/*
const mapDispatchToProps = () => {
  //var mypush = push
  return { push }

}
*/
export const Dashboard = connect(mapStateToProps,mapDispatchToProps)(DashboardComponent)
/*
export const Dashboard = connect(
  state => ({
    isAuthenticated: state.User.isAuthenticated,
    isAdmin: state.User.isAdmin
  }),
  { push }
)(DashboardComponent);
*/
