import { takeEvery, all } from 'redux-saga/effects';
import * as ACTION from '../constants';

import * as user from './user/';

export default function* cmsSaga() {
  yield all([
    takeEvery(ACTION.USER.SIGNIN, user.signInUser),
    takeEvery(ACTION.USER.SIGNOUT, user.signOutUser),
  ]);
}