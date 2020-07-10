import { connect } from 'react-redux';
import DialogCompareContainerComponent from '../../components/CNC/DialogCompareContainer';
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
    OpenCompareContainerDialog: (open) => dispatch(actions.OpenCompareContainerDialog(open)),
    CompareContainerFetch: (startDate, endDate, limit, skip, route, setSubmittingOff) => dispatch(actions.CompareContainerFetch(startDate, endDate, limit, skip, route, setSubmittingOff)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message, errorType, errorSeverity) => dispatch(actions.SetAppError(message, errorType, errorSeverity)),
  };
};

export const DialogCompareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogCompareContainerComponent);
