import { call, put, takeEvery } from 'redux-saga/effects';
import { URL_FOR_EVO_LIST, URL_FOR_POK_LIST } from '@utils/constants';
import { httpGet } from '@utils/request';
import { ActionFetch, setPokUrls, setEvoUrls } from '../actions/actions';

let urlForNextPok = URL_FOR_POK_LIST;
let urlForNextEvo = URL_FOR_EVO_LIST;

function* getUrlsSaga({ type }: ActionFetch) {
  try {
    let urls = [];
    if (type === 'GET_POK_URLS') {
      urls = yield call(httpGet, urlForNextPok);
      urlForNextPok = yield urls.next;
      yield put(setPokUrls(urls.results));
    }
    if (type === 'GET_EVO_URLS') {
      urls = yield call(httpGet, urlForNextEvo);
      urlForNextEvo = yield urls.next;
      yield put(setEvoUrls(urls.results));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* urlsSaga() {
  yield takeEvery('GET_POK_URLS', getUrlsSaga);
  yield takeEvery('GET_EVO_URLS', getUrlsSaga);
}
