import { connect } from "react-redux";
import OEEPartTableComponent from "../components/OEEPartTable";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { HourlyOEEValues } = state
  return {
    total: HourlyOEEValues.total,
    limit: HourlyOEEValues.limit,
    skip: HourlyOEEValues.skip,
    data: HourlyOEEValues.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  FetchNextHourlyOEEValues: (skip) => dispatch(actions.FetchNextHourlyOEEValues(skip))
  }
}


export const OEEPartTable = connect(mapStateToProps, mapDispatchToProps)(OEEPartTableComponent)
