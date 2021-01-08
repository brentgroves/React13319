import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  AuthenticateSaga: (email,password,route,setSubmittingOff) => dispatch(actions.AuthenticateSaga(email,password,route,setSubmittingOff)),
  ClearAppError: () => dispatch(actions.ClearAppError()),
  Submitting: (submitting) => dispatch(actions.Submitting(submitting))
  }
}

function mapStateToProps(state) {
  const { User,Global,Msal } = state
  return {
    msalInstance: Msal.msalInstance,
    appError: Global.appError,
    isAuthenticated: User.isAuthenticated,
    submitting: Global.submitting
  }
}

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
