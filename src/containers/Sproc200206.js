import { connect } from "react-redux";
import Sproc200206Component from "../components/Sproc200206";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User,Sproc } = state
  return {
    isAuthenticated: User.isAuthenticated,
    sprocName: Sproc.sprocName,
    tableName: Sproc.tableName,
    total: Sproc.total,
    limit: Sproc.limit,
    skip: Sproc.skip,
    data: Sproc.data

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
  QueryFetch: (sprocName,tableName,limit,skip) => dispatch(actions.QueryFetch(sprocName,tableName,limit,skip))
  }
}


export const Sproc200206 = connect(mapStateToProps, mapDispatchToProps)(Sproc200206Component)
