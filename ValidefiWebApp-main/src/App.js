import React from 'react';
import Routing from './Components/Routing';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  </HashRouter>
);

export default App;
