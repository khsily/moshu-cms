import * as ACTION from '../constants';

const action = (type, payload = {}) => ({ type, payload });

function createAction(type, actions) {
  return {
    success: data => action(type.SUCCESS, data),
    failure: data => action(type.FAILURE, data),
    ...actions(type),
  }
}

//user
export const user = createAction(ACTION.USER, (type) => ({
  signIn: (id, pw) => action(type.SIGNIN, { id, pw }),
  signOut: () => action(type.SIGNOUT),
}));