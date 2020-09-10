import { connect } from "react-redux";
import TableUpcomingToolChangesComponent from "../../components/CNC/TableUpcomingToolChanges";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, UpcomingToolChanges, Global } = state;
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
