import React, { lazy } from 'react';

const Dashboard = lazy(() => import('../Dashboard'));
const Auth = lazy(() => import('../Auth'));
// private => Route requires authentication
// layout => header should be visible or not
// restricted => authenticated user cannot visit login type restriction

export const RouteList = [
  {
    link: '/dashboard',
    private: true,
    layout: true,
    render: () => <Dashboard />,
  },

  {
    link: '/login',
    private: false,
    restricted: true,
    layout: true,
    render: (props) => <Auth type="login" {...props} />,
  },
  {
    link: '/register',
    restricted: true,
    layout: true,
    render: (props) => <Auth type="register" {...props} />,
  },
];
