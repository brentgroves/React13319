import { connect } from "react-redux";
import Sproc200206ViewComponent from "../components/Sproc200206View";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open))
  }
}


export const Sproc200206View = connect(mapStateToProps, mapDispatchToProps)(Sproc200206ViewComponent)
