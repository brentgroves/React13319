import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  AuthenticateSaga: (email,password,route,setSubmittingOff) => dispatch(actions.AuthenticateSaga(email,password,route,setSubmittingOff)),
  ClearError: () => dispatch(actions.ClearError()),
  IsSubmitting: (isSubmitting) => dispatch(actions.IsSubmitting(isSubmitting))
  }
}

function mapStateToProps(state) {
  const { User,Global } = state
  return {
    error: Global.error,
    isAuthenticated: User.isAuthenticated,
    isSubmitting: Global.isSubmitting
  }
}

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
