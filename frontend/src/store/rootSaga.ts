import { all } from 'redux-saga/effects';
import authSaga from './saga/authSaga';
import flightSaga from './saga/flightSaga';
import bookingSaga from './saga/bookingSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    flightSaga(),
    bookingSaga(),
  ]);
}
