import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  AuthenticateSaga: (user) => dispatch(actions.AuthenticateSaga(user)),
  ClearAuthenticateError: () => dispatch(actions.ClearAuthenticateError()),
  }
}

function mapStateToProps(state) {
  const { User } = state
  return {
    authenticateError: User.authenticateError,
    authenticateIsSubmitting: User.authenticateIsSubmitting,
    isAuthenticated: User.isAuthenticated
  }
}

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
