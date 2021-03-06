import React, { lazy } from 'react';

const Dashboard = lazy(() => import('../Dashboard'));
const Auth = lazy(() => import('../Auth'));
const NotFound = lazy(() => import('../NotFound'));
const Contact = lazy(() => import('../Contact'));
const Profile = lazy(() => import('../Profile'));
const Coins = lazy(() => import('../Coins'));
const Explorer = lazy(() => import('../Explorer'));
const Portfolio = lazy(() => import('../Portfolio'));
const CoinDetail = lazy(() => import('../CoinDetail'));
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
    layout: false,
    render: (props) => <Auth {...props} />,
  },
  {
    link: '/404',
    private: false,
    layout: false,
    render: () => <NotFound />,
  },
  {
    link: '/500',
    private: false,
    layout: false,
    render: () => <h1>Server error occured</h1>,
  },
  {
    link: '/contact',
    private: true,
    layout: true,
    render: () => <Contact />,
  },
  {
    link: '/coins',
    private: false,
    layout: true,
    render: () => <Coins />,
  },
  {
    link: '/profile',
    private: true,
    layout: true,
    render: () => <Profile />,
  },
  {
    link: '/explorer',
    private: true,
    layout: true,
    render: () => <Explorer />,
  },
  {
    link: '/portfolio',
    private: true,
    layout: true,
    render: () => <Portfolio />,
  },
  {
    link: '/coin/:coin',
    private: false,
    layout: true,
    render: () => <CoinDetail />,
  },
  {
    link: '/',
    private: false,
    layout: false,
    restricted: true,
    render: (props) => <Auth {...props} />,
  },
];
