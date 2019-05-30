import { combineReducers } from 'redux';
import login from './login/reducer';
import updateTutor from './updateTutor/reducer';

export default combineReducers({
  login,
  updateTutor
});