import { lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
// const Welcome = lazy(() => import('./Welcome'));
const Page404 = lazy(() => import('./404'));
const Blank = lazy(() => import('./Blank'));
// const Charts = lazy(() => import('./Charts'))
// const Leads = lazy(() => import('./Leads'));
const Integration = lazy(() => import('./Integration'));
// const Calendar = lazy(() => import('./Calendar'));
const Team = lazy(() => import('./Team'));
// const Transactions = lazy(() => import('./Transactions'));
// const Bills = lazy(() => import('./Bills'));
const ProfileSettings = lazy(() => import('./ProfileSettings'));

export { Dashboard, Page404, Blank, Integration, Team, ProfileSettings };
