import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers'

const div = document.createElement('div');
document.body.insertBefore(div, document.querySelector('script'));

const STORE = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ReactReduxApp = (props) => (
  <Provider store={props.store}>
    <App />
  </Provider>
);

ReactDOM.render(<ReactReduxApp store={STORE}/>, div);

module.hot && module.hot.accept('/', () => {
  console.log('The application was updated!');
  registerServiceWorker();
});

