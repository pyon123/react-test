import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getData } from '../../util/request';

import {
  LOAD_PORPERTY,
} from '../actions/types'

import {
  action_loadPropertySuccess,
  action_loadPropertyFailure,
} from '../actions'

function* loadProperty() {
  try {
    const data = yield call(getData);
    yield put(action_loadPropertySuccess(data));
  }
  catch (error) {
    console.log('error ==>', error)
    yield put(action_loadPropertyFailure());
  }
}

export function* middle_load() {
  yield takeEvery(LOAD_PORPERTY, loadProperty)
}

export default function* rootSaga() {
  yield all([
    fork(middle_load),
  ])
}