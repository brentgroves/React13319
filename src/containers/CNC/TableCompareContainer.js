import { connect } from "react-redux";
import TableCompareContainerComponent from "../../components/CNC/TableCompareContainer";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, CompareContainer, Global } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    total: CompareContainer.total,
    limit: CompareContainer.limit,
    skip: CompareContainer.skip,
    data: CompareContainer.data,
    submitting: Global.submitting
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    CompareContainerFetch: (limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.CompareContainerFetch(
          limit,
          skip,
          route,
          setSubmittingOff
        )
      ),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

export const TableCompareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableCompareContainerComponent);
