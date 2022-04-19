import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { pokemonsReducers } from './reducers/pokemonsReducers';
import { urlsSaga } from './sages/urls';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  pokemonsReducers,
  applyMiddleware(sagaMiddleware)
  // composeEnhancers()
);

sagaMiddleware.run(urlsSaga);
