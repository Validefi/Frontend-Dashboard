import React from 'react';
import Routing from './Components/Routing';
import { HashRouter } from 'react-router-dom';

import { connect } from 'react-redux';

const App = () => {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
});

const mapDispatchToProps = (dispatch) => ({
  // registerUser: (wallet) => {
  //   dispatch(registerUser(wallet));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
