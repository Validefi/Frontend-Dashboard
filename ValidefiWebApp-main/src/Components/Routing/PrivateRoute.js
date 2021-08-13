import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Web3 from 'web3';

const updateChildrenWithProps = (props, children) =>
  React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      //this properties are available as a props in child components
      ...props,
      index: i,
    });
  });

const PrivateRouteComponent = (props) => (
  <Route
    {...props.routeProps}
    render={(renderProps) => {
      if (
        !props.isAuthenticated ||
        window.ethereum === undefined ||
        !Web3.utils.isAddress(localStorage.getItem('wallet_address'))
      ) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.computedMatch.url },
            }}
          />
        );
      }

      if (props.render) {
        return props.render({ match: props.computedMatch });
      }

      return <>{updateChildrenWithProps(renderProps, props.children)}</>;
    }}
  />
);

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    location: ownProps.path,
    routeProps: {
      exact: ownProps.exact,
      path: ownProps.path,
      component: ownProps.component,
    },
    match: ownProps.match,
  };
};

export default connect(mapStateToProps, null, null, { pure: true })(
  PrivateRouteComponent
);
