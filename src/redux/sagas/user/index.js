import { put } from 'redux-saga/effects';
import * as action from '../../actions';
import { User } from '../../../api/model';

export function* signInUser({ payload }) {
  try {
    const data = yield User.signIn(payload.id, payload.pw);
    yield put(action.user.success(data));
  } catch (e) {
    yield put(action.user.failure(e));
  }
}
export function* signOutUser() {
  yield User.signOut();
  yield put(action.user.success());
}