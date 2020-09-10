import { connect } from "react-redux";
import ViewToolChangeSummaryComponent from "../../components/CNC/ViewToolChangeSummary";
import * as actions from '../../actions'

function mapStateToProps(state) {
  const { User,ToolChangeSummary } = state
  return {
    startDate: ToolChangeSummary.startDate,
    endDate: ToolChangeSummary.endDate,
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity))
  }
}


export const ViewToolChangeSummary = connect(mapStateToProps, mapDispatchToProps)(ViewToolChangeSummaryComponent)
