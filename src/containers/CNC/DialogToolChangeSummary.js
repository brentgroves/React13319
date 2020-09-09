import { connect } from 'react-redux';
import DialogToolChangeSummaryComponent from '../../components/CNC/DialogToolChangeSummary';
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
    CreateToolChangeSummary: (startDate,endDate,fetch,limit,route, setSubmittingOff) => dispatch(actions.CreateToolChangeSummary(startDate,endDate,fetch,limit,route, setSubmittingOff)),
    SetToolChangeSummaryStartDate: (startDate) => dispatch(actions.SetToolChangeSummaryStartDate(startDate)),
    SetToolChangeSummaryEndDate: (endDate) => dispatch(actions.SetToolChangeSummaryEndDate(endDate)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message, errorType, errorSeverity) =>
      dispatch(actions.SetAppError(message, errorType, errorSeverity)),
  };
};

export const DialogToolChangeSummary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogToolChangeSummaryComponent);
