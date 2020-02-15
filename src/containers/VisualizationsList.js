import { connect } from "react-redux";
import VisualizationsListComponent from "../components/VisualizationsList";
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
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open)),
    Sproc200206Create: (startDate,endDate) => dispatch(actions.Sproc200206Create(startDate,endDate))
  }
}


export const VisualizationsList = connect(mapStateToProps, mapDispatchToProps)(VisualizationsListComponent)
