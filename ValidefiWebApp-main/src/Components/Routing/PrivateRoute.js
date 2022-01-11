import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Loading/Spinner';
import { useWeb3React } from '@web3-react/core';
import { useHistory } from 'react-router-dom';

function PrivateLayout(params) {
  const { active, account } = useWeb3React();
  const { children, ...props } = params;
  const [status, setStatus] = useState('loading');
  const history = useHistory();

  useLayoutEffect(() => {
    if (typeof window !== undefined) {
      if (active && account && props.isAuthenticated) {
        setStatus('success');
      } else {
        history.push('/login');
      }
    }
  }, [account, active, history, props.isAuthenticated]);
  return (
    <>
      {status === 'success' && React.cloneElement(children, { ...props })}
      {status === 'loading' && (
        <div className="d-flex p-4 justify-content-center align-items-center vw-100 vh-100 position-absolute top-0 left-0">
          <Spinner />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateLayout);
