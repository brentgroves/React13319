import { connect } from 'react-redux';
import DialogUpcomingToolChangesComponent from '../../components/CNC/DialogUpcomingToolChanges';
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
    UpcomingToolChangesCreate: (Building_Key,fetch,limit,route, setSubmittingOff) => dispatch(actions.UpcomingToolChangesCreate(Building_Key,fetch,limit,route, setSubmittingOff)),
    SetUpcomingToolChangesBuildingKey:(Building_Key) => dispatch(actions.SetUpcomingToolChangesBuildingKey(Building_Key)),
    SetUpcomingToolChangesBuildingCode:(Building_Code) => dispatch(actions.SetUpcomingToolChangesBuildingCode(Building_Code)),
    Push: (path) => dispatch(actions.Push(path)),
    Submitting: (submitting) => dispatch(actions.Submitting(submitting)),
    SetAppError: (message, errorType, errorSeverity) =>
      dispatch(actions.SetAppError(message, errorType, errorSeverity)),
  };
};

export const DialogUpcomingToolChanges = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogUpcomingToolChangesComponent);

/*
export const UpcomingToolChangesCreate = (
  Building_Key,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.UPCOMING_TOOL_CHANGES_CREATE,
  Building_Key,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

*/