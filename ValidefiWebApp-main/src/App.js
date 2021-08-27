import React, { useEffect } from 'react';
import Routing from './Components/Routing';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { registerUser } from './Store/actionCreatos/auth';

const queryClient = new QueryClient();

const App = () => {
  const { account, active, error } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (active && !error) {
      dispatch(registerUser({ address: account }));
    }
  }, [account]);

  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </HashRouter>
  );
};

export default App;
