import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../util/request';

import {
  LOAD_PORPERTY,
} from '../actions/types'

import {
  action_loadPropertySuccess,
  action_loadPropertyFailure,
} from '../actions'

function* loadProperty({payload}) {
  try {
    const data = yield call(getData, payload.params);
    yield put(action_loadPropertySuccess(data));
  }
  catch (error) {
    console.log('error ==>', error)
    yield put(action_loadPropertyFailure());
  }
}

export function* middle_load() {
  yield takeLatest(LOAD_PORPERTY, loadProperty)
}

export default function* rootSaga() {
  yield all([
    fork(middle_load),
  ])
}