import { connect } from "react-redux";
import Sproc200206DialogComponent from "../components/Sproc200206Dialog";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User,Sproc200206,Global } = state
  return {
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek,
    submitting: Global.submitting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open)),
    View200206: (startDate,endDate,limit,route,setSubmittingOff) => dispatch(actions.View200206(startDate,endDate,limit,route,setSubmittingOff)),
//    Sproc200206Create: (startDate,endDate,fetch,limit,route,setSubmittingOff) => dispatch(actions.Sproc200206Create(startDate,endDate,fetch,limit,route,setSubmittingOff)),
  //  Sproc200221Create: (startDate,endDate,fetch,limit,route,setSubmittingOff) => dispatch(actions.Sproc200221Create(startDate,endDate,fetch,limit,route,setSubmittingOff)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity))
  }
}


export const Sproc200206Dialog = connect(mapStateToProps, mapDispatchToProps)(Sproc200206DialogComponent)
