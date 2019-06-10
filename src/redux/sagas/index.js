import { put, takeLatest, call } from 'redux-saga/effects'
import ajax from '@/utils/request'

export function* fetchData() {
  try {
    const { data: { data } } = yield call(ajax, '/test')
    yield put({type: "SAVE_DATA", data});
  } catch (e) {
  }
}

export default function* fetchDataSaga(){
  yield takeLatest("FETCH_DATA_SAGA", fetchData)
}
