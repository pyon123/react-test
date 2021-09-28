import { all } from 'redux-saga/effects';

// sagas
import propertySagas from './Property';

export default function* rootSaga(getState) {
  yield all([
    propertySagas()
  ]);
}