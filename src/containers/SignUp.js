import { connect } from 'react-redux'
import SignUpComponent from '../components/SignUp'
import * as actions from '../actions'

//export const SignUp = connect(state => ({isAdmin:state.bpgservices.isAdmin,isAuthenticated:state.bpgservices.isAuthenticated}), {})(SignUpComponent)


const mapDispatchToProps = dispatch => ({
  SetUserName: (name) => dispatch(actions.SetUserName(name))
});

/*
const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
});
*/

function mapStateToProps(state) {
  const { User } = state
  return {
    authenticateError: User.authenticateError,
    authenticateIsSubmitting: User.authenticateIsSubmitting,
    userName: User.userName
  }
}


//export const SignIn = connect(() => (state => {srv:state.bpgservices.app}), mapDispatchToProps)(SignInComponent)
export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent)
