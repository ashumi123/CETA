import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Src/Redux/Reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './Src/Redux/Saga';

const sagaMiddleware = createSagaMiddleware();

export const ConfigureStore = () => {

  const store = createStore(rootReducer, 
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
