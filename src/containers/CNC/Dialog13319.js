import { connect } from 'react-redux';
import Dialog13319Component from '../../components/CNC/Dialog13319';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const { Global } = state;
  return {
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek,
    submitting: Global.submitting,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    OpenDialog200206: (open) => dispatch(actions.OpenDialog200206(open)),
    View200206: (startDate, endDate, limit, route, setSubmittingOff) =>
      dispatch(
        actions.View200206(startDate, endDate, limit, route, setSubmittingOff),
      ),
    //    Sproc200206Create: (startDate,endDate,fetch,limit,route,setSubmittingOff) => dispatch(actions.Sproc200206Create(startDate,endDate,fetch,limit,route,setSubmittingOff)),
    //  Sproc200221Create: (startDate,endDate,fetch,limit,route,setSubmittingOff) => dispatch(actions.Sproc200221Create(startDate,endDate,fetch,limit,route,setSubmittingOff)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message, errorType, errorSeverity) =>
      dispatch(actions.SetAppError(message, errorType, errorSeverity)),
  };
};

export const Dialog13319 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialog13319Component);
