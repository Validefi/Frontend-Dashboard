import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useWeb3React } from '@web3-react/core';

const updateChildrenWithProps = (props, children) =>
  React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      //this properties are available as a props in child components
      ...props,
      index: i,
    });
  });

const PublicRouteComponent = (props) => {
  const { active } = useWeb3React();

  if (props.render) {
    return props.render({ match: props.computedMatch });
  }
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...props.routeProps}
      render={(renderProps) =>
        active && props.restricted ? (
          <Redirect to="/portfolio" />
        ) : (
          <>{updateChildrenWithProps(renderProps, props.children)}</>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    restricted: ownProps.restricted,
    location: ownProps.path,
    routeProps: {
      exact: ownProps.exact,
      path: ownProps.path,
      component: ownProps.component,
    },
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(
  PublicRouteComponent
);
