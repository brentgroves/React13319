import { connect } from "react-redux";
import FormikExampleComponent from "../components/FormikExample";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { User,Sproc,Global } = state
  return {
    isAuthenticated: User.isAuthenticated,
    sprocName: Sproc.sprocName,
    tableName: Sproc.tableName,
    total: Sproc.total,
    limit: Sproc.limit,
    skip: Sproc.skip,
    data: Sproc.data,
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    OpenSproc200206Dialog: (open) => dispatch(actions.OpenSproc200206Dialog(open)),
    Sproc200206Create: (startDate,endDate) => dispatch(actions.Sproc200206Create(startDate,endDate)),
    Push: (path) => dispatch(actions.Push(path)),
  QueryFetch: (sprocName,tableName,limit,skip) => dispatch(actions.QueryFetch(sprocName,tableName,limit,skip))

  }
}


export const FormikExample = connect(mapStateToProps, mapDispatchToProps)(FormikExampleComponent)
