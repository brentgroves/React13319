import { connect } from "react-redux";
import ViewCompareContainerComponent from "../../components/CNC/ViewCompareContainer";
import * as actions from '../../actions'

function mapStateToProps(state) {
  const { User } = state
  return {
    isAuthenticated: User.isAuthenticated,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity))
  }
}


export const ViewCompareContainer = connect(mapStateToProps, mapDispatchToProps)(ViewCompareContainerComponent)
