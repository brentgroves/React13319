import { connect } from "react-redux";
import SideMenuComponent from "../../components/CNC/SideMenu";
import * as actions from '../../actions'

function mapStateToProps(state) {
  const { User, Global } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek,
    firstDayOfMonth: Global.firstDayOfMonth,
    lastDayOfMonth: Global.lastDayOfMonth

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    OpenCompareContainerDialog: (open) => dispatch(actions.OpenCompareContainerDialog(open))
  }
}


export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent)
