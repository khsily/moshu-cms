import createSagaMiddleWare from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import cmsSaga from './sagas';
import reducers from './reducers';
import * as action from './actions';

const middlewares = [];
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleWare();

middlewares.push(loggerMiddleware);
middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(cmsSaga);

const initialize = (dispatch) => Promise.all([
  
]);

export { store, initialize }