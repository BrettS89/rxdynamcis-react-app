import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import { apiGetOpenTransferRequests, apiGetMyTransferRequests, apiClaimTransferRequest, apiCancelTransferRequest, apiCompleteTransferRequest } from '../../lib/apiCalls';
import * as actionTypes from '../actions/actionTypes';
import * as appActions from '../actions/app';
import * as transferRequestActions from '../actions/transferRequests';

export default [
  openTransferRequestsWatcher,
  myTransferRequestsWacher,
  claimTransferRequestWatcher,
  cancelTransferRequestWatcher,
  completeTransferRequestWatcher,
];

function * openTransferRequestsWatcher() {
  yield takeLatest(actionTypes.GET_OPEN_TRANSFER_REQUESTS, openTransferRequestsHandler);
}

function * myTransferRequestsWacher() {
  yield takeLatest(actionTypes.GET_MY_TRANSFER_REQUESTS, myTransferRequestsHandler);
}

function * claimTransferRequestWatcher() {
  yield takeLatest(actionTypes.CLAIM_TRANSFER_REQUEST, claimTransferRequestHandler);
}

function * cancelTransferRequestWatcher() {
  yield takeLatest(actionTypes.CANCEL_TRANSFER_REQUEST, cancelTransferRequestHandler);
}

function * completeTransferRequestWatcher() {
  yield takeLatest(actionTypes.COMPLETE_TRANSFER_REQUEST, completeTransferRequestHandler);
}


function * openTransferRequestsHandler() {
  try {
    const { data: { openTransferRequests } } =
      yield call(apiGetOpenTransferRequests);

    yield put(transferRequestActions.setOpenTransferRequests(
      openTransferRequests
    ));

  } catch(e) {
    console.log('openTransferRequestsHandler error: ', e);
  }
}

function * myTransferRequestsHandler() {
  try {
    yield put(appActions.isLoading());
    const { data: { myTransferRequests } } =
    yield call(apiGetMyTransferRequests);

  yield put(transferRequestActions.setMyTransferRequests(
    myTransferRequests
  ));
  yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('myTransferRequestsHandler error: ', e);
  }
}

function * claimTransferRequestHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { data: { myTransferRequests } } =
      yield call(apiClaimTransferRequest, payload);
    
    yield put(transferRequestActions.setMyTransferRequests(
      myTransferRequests
    ));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('claimTransferRequestHandler error: ', e);
  }
}

function * cancelTransferRequestHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { data: { myTransferRequests } } =
      yield call(apiCancelTransferRequest, payload);
    
    yield put(transferRequestActions.setMyTransferRequests(
      myTransferRequests
    ));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('cancelTransferRequestHandler error: ', e);
  }
}

function * completeTransferRequestHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { data: { myTransferRequests } } =
    yield call(apiCompleteTransferRequest, payload);

    yield put(transferRequestActions.setMyTransferRequests(
      myTransferRequests
    ));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('cancelTransferRequestHandler error: ', e);
  }  
}
