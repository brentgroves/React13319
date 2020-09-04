import { connect } from "react-redux";
import TablePartProdRateComponent from "../../components/Profit/TablePartProdRate";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { User, PartProdRate, Global } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    start_period: PartProdRate.start_period,
    end_period: PartProdRate.end_period,
    total: PartProdRate.total,
    limit: PartProdRate.limit,
    skip: PartProdRate.skip,
    data: PartProdRate.data,
    submitting: Global.submitting
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
    PartProdRateFetch: (limit, skip, route, setSubmittingOff) =>
      dispatch(
        actions.PartProdRateFetch(
          limit,
          skip,
          route,
          setSubmittingOff
        )
      ),
    Submitting: submitting => dispatch(actions.Submitting(submitting))
  };
};

export const TablePartProdRate = connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePartProdRateComponent);
