import { connect } from "react-redux";
import TableToolChangeSummaryComponent from "../../components/CNC/TableToolChangeSummary";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, ToolChangeSummary, Global } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    startDate: ToolChangeSummary.startDate,
    endDate: ToolChangeSummary.endDate,
    table: ToolChangeSummary.table,
    total: ToolChangeSummary.total,
    limit: ToolChangeSummary.limit,
    skip: ToolChangeSummary.skip,
    data: ToolChangeSummary.data,
    submitting: Global.submitting
  };
}
//ToolChangeSummary
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    FetchToolChangeSummary: (table,limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.FetchToolChangeSummary(
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

export const TableToolChangeSummary = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableToolChangeSummaryComponent);
