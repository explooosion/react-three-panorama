import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_EXAMPLE, FETCH_EXAMPLE_SUCCESS, FETCH_EXAMPLE_ERROR } from '../reducers/example';

import { getExample } from '../services/Example';

function* fetchExample() {
  while (true) {
    const response = yield call(getExample);
    if (response.status === 200) {
      yield put({ type: FETCH_EXAMPLE_SUCCESS, payload: response.data });
    } else {
      yield put({ type: FETCH_EXAMPLE_ERROR, payload: response.data });
    }
  }
}

export default function* Example() {
  yield takeLatest(FETCH_EXAMPLE, fetchExample);
}
