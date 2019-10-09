import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { loadAllRepositories } from './repositories/sagas';

import { UsersTypes } from './users/types';
import { loadAllUsers } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadAllRepositories),
    takeLatest(UsersTypes.LOAD_ALL_REQUEST, loadAllUsers),
  ]);
}