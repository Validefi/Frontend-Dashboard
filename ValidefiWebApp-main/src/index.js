import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from './Store/configureStore';
import { Provider } from 'react-redux';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'development') console.log = () => {};
