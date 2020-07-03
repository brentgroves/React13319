import { connect } from "react-redux";
import Table200206Component from "../../components/OEE/Table200206";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, Sproc200206, Global } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    sproc: Sproc200206.sproc,
    table: Sproc200206.table,
    total: Sproc200206.total,
    limit: Sproc200206.limit,
    skip: Sproc200206.skip,
    data: Sproc200206.data,
    submitting: Global.submitting
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    Sproc200206Fetch: (sproc, table, limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.Sproc200206Fetch(
          sproc,
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

export const Table200206 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table200206Component);
