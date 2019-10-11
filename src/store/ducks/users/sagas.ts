import { put } from "redux-saga/effects";

import { loadAllSuccess, loadAllFailure } from "./actions";

export function* loadAllUsers() {
  try {
    const response = [
      {
        id: "1",
        firstName: "Gilmagno",
        lastName: "Costa"
      },
      {
        id: "2",
        firstName: "Gilmagno 2",
        lastName: "Costa 2"
      }
    ];

    yield put(loadAllSuccess(response));
  } catch (err) {
    yield put(loadAllFailure());
  }
}
