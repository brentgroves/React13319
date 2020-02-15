import { connect } from 'react-redux'
import DialogsComponent from '../components/Dialogs'
import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  ClearAuthenticateError: () => dispatch(actions.ClearAuthenticateError()),
  Push: (path) => dispatch(actions.Push(path))
  }
}

function mapStateToProps(state) {
  const { Dialogs } = state
  return {
    openSproc200206Dialog: Dialogs.openSproc200206Dialog
  }
}

export const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsComponent)
