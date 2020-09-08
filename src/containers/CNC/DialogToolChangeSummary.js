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
    OpenDialogToolChangeSummary: (open) => dispatch(actions.OpenDialogToolChangeSummary(open)),
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
