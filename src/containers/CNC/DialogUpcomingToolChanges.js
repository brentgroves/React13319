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
    PartProdRateFetch: (startPeriod, endPeriod, limit, skip, route, setSubmittingOff) => dispatch(actions.PartProdRateFetch(startPeriod, endPeriod, limit, skip, route, setSubmittingOff)),
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