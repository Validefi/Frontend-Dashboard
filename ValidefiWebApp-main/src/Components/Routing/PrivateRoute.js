import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

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
      if (!props.logged_in) {
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

      return <div>{updateChildrenWithProps(renderProps, props.children)}</div>;
    }}
  />
);

const mapStateToProps = (state, ownProps) => {
  return {
    logged_in: state.auth.isAuthenticated,
    location: ownProps.path,
    routeProps: {
      exact: ownProps.exact,
      path: ownProps.path,
      component: ownProps.component,
    },
    match: ownProps.match,
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(
  PrivateRouteComponent
);
