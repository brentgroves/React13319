import { connect } from 'react-redux'
import AdminRouteComponent from '../components/AdminRoute'

export const AdminRoute = connect((state) => ({isAdmin:state.User.isAdmin}), {})(AdminRouteComponent)
