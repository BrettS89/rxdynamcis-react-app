import axios from 'axios';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import { apiLogin } from '../../lib/apiCalls';
import * as actionTypes from '../actions/actionTypes';
import * as appActions from '../actions/app';
import * as authActions from '../actions/auth';

export default [
  loginWatcher,
  logoutWatcher,
];

function * loginWatcher() {
  yield takeLatest(actionTypes.ON_LOGIN, loginHandler);
}

function * logoutWatcher() {
  yield takeLatest(actionTypes.ON_LOGOUT, logoutHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put(appActions.isLoading());
    const { data: { token } } = yield call(apiLogin, form);
    localStorage.setItem('token', token);
    navigate();
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('loginHandler error: ', e);
  }
}

function * logoutHandler() {
  try {
    yield localStorage.clear();
    yield put(authActions.resetStore());
  } catch(e) {
    console.log('logoutHandler error: ', e);
  }
}