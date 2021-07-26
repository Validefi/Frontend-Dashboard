import React, { lazy, Suspense } from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import Loading from '../Loading';
import { RouteList } from './RouteList';

const TopHeader = lazy(() => import('../TopHeader'));
const BottomHeader = lazy(() => import('../BottomHeader'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const PublicRoute = lazy(() => import('./PublicRoute'));

const Routing = () => {
  const routes = RouteList;
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-100">
        <Switch>
          {routes.map((route, index) => {
            return route.private ? (
              <PrivateRoute
                restricted={route.restricted}
                key={index}
                exact
                path={route.link}
              >
                <Layout layout={route.layout}>
                  <route.render />
                </Layout>
              </PrivateRoute>
            ) : (
              <PublicRoute
                restricted={route.restricted}
                exact
                path={route.link}
                key={index}
              >
                <Layout layout={route.layout}>
                  <route.render />
                </Layout>
              </PublicRoute>
            );
          })}
          <Redirect to="/404" />
        </Switch>
      </div>
    </Suspense>
  );
};

const Layout = (params) => {
  const { children, layout, ...props } = params;
  return (
    <>
      {layout && <TopHeader />}
      {React.cloneElement(children, { ...props })}
      {layout && <BottomHeader />}
    </>
  );
};
export default withRouter(Routing);
