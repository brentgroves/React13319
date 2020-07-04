import { connect } from "react-redux";
import View13319Component from "../../components/CNC/View13319";
import * as actions from '../../actions'

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
    OpenDialog200206: (open) => dispatch(actions.OpenDialog200206(open)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity))
  }
}


export const View13319 = connect(mapStateToProps, mapDispatchToProps)(View13319Component)
