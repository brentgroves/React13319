import { connect } from "react-redux";
import TableUpcomingToolChangesComponent from "../../components/CNC/TableUpcomingToolChanges";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, PartProdRate, UpcomingToolChanges, Global } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    Building_Key: UpcomingToolChanges.Building_Key,
    table: UpcomingToolChanges.table,
    total: UpcomingToolChanges.total,
    limit: UpcomingToolChanges.limit,
    skip: UpcomingToolChanges.skip,
    data: UpcomingToolChanges.data,
    submitting: Global.submitting
  };
  /*
  return {
    isAuthenticated: User.isAuthenticated,
    total: PartProdRate.total,
    limit: PartProdRate.limit,
    skip: PartProdRate.skip,
    data: PartProdRate.data,
    submitting: Global.submitting
  };
  */
}
//UpcomingToolChanges
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    UpcomingToolChangesFetch: (table,limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.UpcomingToolChangesFetch(
          table,
          limit,
          skip,
          route,
          setSubmittingOff
        )
      ),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

export const TableUpcomingToolChanges = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableUpcomingToolChangesComponent);
/*
    PartProdRateFetch: (limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.PartProdRateFetch(
          limit,
          skip,
          route,
          setSubmittingOff
        )
      ),
*/