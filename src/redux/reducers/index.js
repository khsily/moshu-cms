import { combineReducers } from 'redux';
import * as ACTION from '../constants';


const ISArray = { payload: [], isFetching: false };
const ISobj = { ...ISArray, payload: {} };
const ISAuth = { nickname: "" };

function createDefaultReducer(type, state, action) {
  switch (action.type) {
    case type.REQUEST:
      return { ...state, ...action.payload, isFetching: true }
    case type.SUCCESS:
    case type.FAILURE:
      return { ...state, ...action.payload, isFetching: false }
    default:
      return state;
  }
}

function auth(state = ISAuth, action) {
  switch (action.type) {
    case ACTION.USER.SIGNIN:
      return Object.assign({}, state, action.payload);
    case ACTION.USER.SIGNOUT:
      return Object.assign({}, state, ISAuth);
    case ACTION.USER.SUCCESS:
      return Object.assign({}, state, action.payload);
    case ACTION.USER.FAILURE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

/** example
 function articleNews(state = ISArray, action) {
  return createDefaultReducer(ACTION.ARTICLE_NEWS, state, action);
 }
 */

const reducers = combineReducers({
  auth,
});

export default reducers;