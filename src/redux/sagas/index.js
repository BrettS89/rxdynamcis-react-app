import { all, fork } from 'redux-saga/effects';
import authSagas from './auth';
import transferRequestSagas from './transferRequests';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(authSagas),
    ...forkList(transferRequestSagas),
  ]);
}
