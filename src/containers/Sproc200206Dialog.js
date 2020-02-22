import { connect } from "react-redux";
import Sproc200206DialogComponent from "../components/Sproc200206Dialog";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User,Sproc200206,Global } = state
  return {
    isAuthenticated: User.isAuthenticated,
    sproc: Sproc200206.sproc,
    table: Sproc200206.table,
    total: Sproc200206.total,
    limit: Sproc200206.limit,
    skip: Sproc200206.skip,
    data: Sproc200206.data,
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open)),
    Sproc200206Create: (startDate,endDate,fetch,limit,route,setSubmittingOff) => dispatch(actions.Sproc200206Create(startDate,endDate,fetch,limit,route,setSubmittingOff)),
    Push: (path) => dispatch(actions.Push(path))
  }
}


export const Sproc200206Dialog = connect(mapStateToProps, mapDispatchToProps)(Sproc200206DialogComponent)
