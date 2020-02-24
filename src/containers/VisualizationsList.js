import { connect } from "react-redux";
import VisualizationsListComponent from "../components/VisualizationsList";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User, Global } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    View200206: (startDate,endDate,limit,route,setSubmittingOff) => dispatch(actions.View200206(startDate,endDate,limit,route,setSubmittingOff)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open))
  }
}


export const VisualizationsList = connect(mapStateToProps, mapDispatchToProps)(VisualizationsListComponent)
