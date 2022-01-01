import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Loading/Spinner';
import { useWeb3React } from '@web3-react/core';
import { useHistory } from 'react-router-dom';

const TopHeader = React.lazy(() => import('../TopHeader'));
const Footer = React.lazy(() => import('../Footer'));
const Sidebar = React.lazy(() => import('../Sidebar'));

function PublicLayout(params) {
  const { active, account } = useWeb3React();
  const { children, ...props } = params;
  const [status, setStatus] = useState('loading');
  const history = useHistory();

  useLayoutEffect(() => {
    if (typeof window !== undefined) {
      if (active && account && props.isAuthenticated) {
        if (props.restricted) {
          history.push('/dashboard');
        } else {
          setStatus('success');
        }
      } else {
        history.push('/login');
      }
    } else {
      history.push('/500');
    }
  }, [account, active, history, props.isAuthenticated, props.restricted]);

  return (
    <>
      {props.layout && (
        <>
          <TopHeader />
          <Sidebar />
        </>
      )}
      {(status === 'success' || props.path === '/login') &&
        React.cloneElement(children, { ...props })}
      {status === 'loading' && props.path !== '/login' && <Spinner />}
      {props.layout && <Footer />}
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PublicLayout);
