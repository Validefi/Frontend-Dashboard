import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
// import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { configureStore } from './Store/configureStore';
import { Provider } from 'react-redux';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
// import getLibrary from './Utils/getLibrary';

const store = configureStore();
const customThemes = {
  // light: 'Frontend-Dashboard/public/index.css',
  // dark: 'Frontend-Dashboard/public/dark.css',
  light: './public/index.css',
  dark: './public/dark.css',
};
// const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK');

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={customThemes} defaultTheme="light">
      <Provider store={store}>
        {/* <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ProviderNetwork getLibrary={getLibrary}> */}
        <App />
        {/* </Web3ProviderNetwork>
        </Web3ReactProvider> */}
      </Provider>
    </ThemeSwitcherProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'development') console.log = () => {};
