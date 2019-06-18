import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import transferRequests from './transferRequests';

export default combineReducers({
  app,
  auth,
  transferRequests,
});
