import { combineReducers } from 'redux';
import auth from './auth';
import transferRequests from './transferRequests';

export default combineReducers({
  auth,
  transferRequests,
});
