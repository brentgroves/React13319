import { connect } from "react-redux";
import Table13319Component from "../../components/CNC/Table13319";
import * as actions from "../../actions";

function mapStateToProps(state) {
  const { Kep13319 } = state;
  return {
    data: Kep13319.nodes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push())
  };
};

export const Table13319 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table13319Component);
