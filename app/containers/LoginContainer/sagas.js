import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { LOGIN } from './constants';
// Individual exports for testing

function* handleDone() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleDone);
}

export function* cancelSaga() {
  yield* takeLatest(LOGIN, handleDone);
}
// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga,
];
