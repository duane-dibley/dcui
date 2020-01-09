import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import App from './app';
// import reducer from './reducers';
// import rootSaga from './sagas';

// Redux-Saga setup
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(rootSaga);

render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <App />,
  document.getElementById('appdiv')
);
