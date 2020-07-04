import * as appSet from '../constants/AppSet';


import bpg from './bpg'
import home from './home'

// seting dispatch as a global variable works, but setting
// store as a global variable in Saga messes up the generator functions
const setupServices = async (dispatch) => {
  let srv;
  if(appSet.BPG===process.env.REACT_APP_SET){
    srv = await bpg(dispatch);
  }
  if(appSet.HOME===process.env.REACT_APP_SET){
    srv = await home(dispatch);
  }

  return srv;
};

export default setupServices;

