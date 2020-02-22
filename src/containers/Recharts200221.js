import { connect } from "react-redux";
import Recharts200221Component from "../components/Recharts200221";
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
    Push: () => dispatch(actions.Push()),
  Sproc200221Fetch: (sproc,table,limit,skip,route,setSubmittingOff) => dispatch(actions.QueryFetch(sproc,table,limit,skip,route,setSubmittingOff))
  }
}


export const Recharts200221 = connect(mapStateToProps, mapDispatchToProps)(Recharts200221Component)
