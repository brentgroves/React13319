import { connect } from "react-redux";
import BarChartDownTime200221Component from "../components/BarChartDownTime200221";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User,Sproc200221 } = state
  return {
    isAuthenticated: User.isAuthenticated,
    sproc: Sproc200221.sproc,
    table: Sproc200221.table,
    total: Sproc200221.total,
    limit: Sproc200221.limit,
    skip: Sproc200221.skip,
    data: Sproc200221.data

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  }
}


export const BarChartDownTime200221 = connect(mapStateToProps, mapDispatchToProps)(BarChartDownTime200221Component)
