import BPGReducer from './bpg';
import HomeReducer from './home';


var RootReducer;
if (process.env.REACT_APP_SET === 'bpg') {
  RootReducer = BPGReducer;
}
if (process.env.REACT_APP_SET === 'home') {
  RootReducer = HomeReducer;
}

export default RootReducer
