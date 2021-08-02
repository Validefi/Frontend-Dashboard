import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { configureStore } from './Store/configureStore';
import { Provider } from 'react-redux';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const store = configureStore();
const customThemes = {
  light: './index.css',
  dark: './dark.css',
};

ReactDOM.render(
  <ThemeSwitcherProvider themeMap={customThemes} defaultTheme="light">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeSwitcherProvider>,

  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'development') console.log = () => {};
