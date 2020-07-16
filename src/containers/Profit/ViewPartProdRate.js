import { connect } from "react-redux";
import ViewPartProdRateComponent from "../../components/Profit/ViewPartProdRate";
import * as actions from '../../actions'

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
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity))
  }
}


export const ViewPartProdRate = connect(mapStateToProps, mapDispatchToProps)(ViewPartProdRateComponent)
