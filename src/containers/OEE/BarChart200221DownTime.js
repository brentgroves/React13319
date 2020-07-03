import { connect } from 'react-redux';
import BarChart200221DownTimeComponent from '../../components/OEE/BarChart200221DownTime';

function mapStateToProps(state) {
  const { User, Sproc200221 } = state;
  return {
    isAuthenticated: User.isAuthenticated,
    sproc: Sproc200221.sproc,
    table: Sproc200221.table,
    total: Sproc200221.total,
    limit: Sproc200221.limit,
    skip: Sproc200221.skip,
    data: Sproc200221.data,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
  };
};

export const BarChart200221DownTime = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarChart200221DownTimeComponent);
