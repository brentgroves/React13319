import { connect } from "react-redux";
import View200206LastWeeksComponent from "../components/View200206LastWeeks";
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


export const View200206LastWeeks = connect(mapStateToProps, mapDispatchToProps)(View200206LastWeeksComponent)
