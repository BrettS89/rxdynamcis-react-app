import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import { apiGetOpenTransferRequests, apiGetMyTransferRequests, apiClaimTransferRequest, apiCancelTransferRequest, apiCompleteTransferRequest, apiGetRxDetails, apiGetTrReport } from '../../lib/apiCalls';
import * as actionTypes from '../actions/actionTypes';
import * as appActions from '../actions/app';
import * as transferRequestActions from '../actions/transferRequests';

export default [
  openTransferRequestsWatcher,
  myTransferRequestsWacher,
  claimTransferRequestWatcher,
  cancelTransferRequestWatcher,
  completeTransferRequestWatcher,
  getRxDetailsWatcher,
  getTransferRequestHistoryWatcher,
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

function * getRxDetailsWatcher() {
  yield takeLatest(actionTypes.GET_RX_DETAILS, getRxDetailsHandler);
}

function * getTransferRequestHistoryWatcher() {
  yield takeLatest(actionTypes.GET_TRANSFER_REQUEST_HISTORY, getTransferRequestHistoryHandler);
}


function * openTransferRequestsHandler() {
  try {
    yield put(appActions.isLoading());
    const { data: { openTransferRequests } } =
      yield call(apiGetOpenTransferRequests);

    yield put(transferRequestActions.setOpenTransferRequests(
      openTransferRequests
    ));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
    console.log('openTransferRequestsHandler error: ', e);
  }
}

function * myTransferRequestsHandler() {
  try {
    const { data: { myTransferRequests } } =
    yield call(apiGetMyTransferRequests);

  yield put(transferRequestActions.setMyTransferRequests(
    myTransferRequests
  ));
  } catch(e) {
    yield put(appActions.setIsError());
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
    yield put(appActions.setIsError());
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
    yield put(appActions.setIsError());
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
    yield put(appActions.setIsError());
    console.log('cancelTransferRequestHandler error: ', e);
  }  
}

function * getRxDetailsHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { data: { rxDetails } } = yield call(apiGetRxDetails, payload);
    yield put(transferRequestActions.setRxDetails(rxDetails))
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(transferRequestActions.setRxDetails(null));
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
    console.log('getRxDetailsHandler error: ', e);
  }
}

function * getTransferRequestHistoryHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { data: { transferRequests } } = yield call(apiGetTrReport, payload);
    console.log(transferRequests);
    yield put(transferRequestActions.setTransferRequestHistory(transferRequests));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
  }
}
