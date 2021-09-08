import React, { useEffect } from 'react';
import Routing from './Components/Routing';
import { HashRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { registerUser } from './Store/actionCreatos/auth';

const App = () => {
  const { account, active, error } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (active && !error) {
      dispatch(registerUser({ address: account }));
    }
  }, [account, active, dispatch, error]);

  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
};

export default App;
