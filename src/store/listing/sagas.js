import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions.js';
import * as actionTypes from './actionTypes.js';


export function* createListingRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'place/', requestParams, {removeContentType: true});
    yield put(actions.createListingSuccess(response));
  } catch (responseError) {
    yield put(actions.createListingFailure(responseError));
  }
}
export function* watchcreateListingRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.CREATE_LISTING_START);
    yield call(createListingRequest, requestParams);
  }
}
export default function* () {
  yield fork(watchcreateListingRequest);
}