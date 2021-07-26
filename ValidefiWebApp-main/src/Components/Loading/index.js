import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Spinner } from 'reactstrap';

const Loading = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth?.isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [auth?.isAuthenticated]);

  if (isAuthenticated) {
    return <Redirect to="/typesel" />;
  }
  return (
    <Spinner size="lg" style={{ position: 'fixed', left: '50%', top: '50%' }} />
  );
};

export default Loading;
