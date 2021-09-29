import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import RootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(RootSaga);

  return store;
}

const store = configureStore();

export default store;