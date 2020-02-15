import { connect } from 'react-redux'
import PrivateComponent from '../components/Private'


export const Private = connect(state => ({userName:state.User.userName}), {})(PrivateComponent)
