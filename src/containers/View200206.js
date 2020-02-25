import { connect } from "react-redux";
import View200206Component from "../components/View200206";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User, Sproc200206 } = state
  return {
    isAuthenticated: User.isAuthenticated,
    total: Sproc200206.total,
    isAdmin: User.isAdmin
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    OpenDialog200206: (open) => dispatch(actions.OpenDialog200206(open))
  }
}


export const View200206 = connect(mapStateToProps, mapDispatchToProps)(View200206Component)
