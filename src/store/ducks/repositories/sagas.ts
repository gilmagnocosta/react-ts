import { call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadAllRepositories() {
  try{
    const response = yield call (api.get, 'users/gilmagnocosta/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}