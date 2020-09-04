import { connect } from 'react-redux';
import DialogPartProdRateComponent from '../../components/Profit/DialogPartProdRate';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const { Global } = state;
  return {
    submitting: Global.submitting,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    PartProdRateFetch: (startPeriod, endPeriod, limit, skip, route, setSubmittingOff) => dispatch(actions.PartProdRateFetch(startPeriod, endPeriod, limit, skip, route, setSubmittingOff)),
    SetPartProdRateStartPeriod: (startPeriod) => dispatch(actions.SetPartProdRateStartPeriod(startPeriod)),
    SetPartProdRateEndPeriod: (endPeriod) => dispatch(actions.SetPartProdRateEndPeriod(endPeriod)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message, errorType, errorSeverity) => dispatch(actions.SetAppError(message, errorType, errorSeverity)),
  };
};

export const DialogPartProdRate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogPartProdRateComponent);
