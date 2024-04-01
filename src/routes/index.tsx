import { LazyExoticComponent } from 'react';

import { ForgotPassword, Login, Register, ResetPassword } from '../pages';
import {
  Blank,
  Dashboard,
  Integration,
  Page404,
  ProfileSettings,
  Team,
} from '../pages/protected';

export interface IRoute {
  path: string;
  component: LazyExoticComponent<React.FC>;
  isPrivate: boolean;
  pageTitle: string;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: Dashboard,
    isPrivate: true,
    pageTitle: 'Dashboard',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    isPrivate: true,
    pageTitle: 'Dashboard',
  },
  {
    path: '/settings-team',
    component: Team,
    isPrivate: true,
    pageTitle: 'Team',
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
    isPrivate: true,
    pageTitle: 'Profile',
  },
  {
    path: '/integration',
    component: Integration,
    isPrivate: true,
    pageTitle: 'Integration',
  },
  {
    path: '*',
    component: Page404,
    isPrivate: false,
    pageTitle: 'Page Not Found',
  },
  {
    path: '/blank',
    component: Blank,
    isPrivate: true,
    pageTitle: 'Blank Page',
  },
  { path: '/login', component: Login, isPrivate: false, pageTitle: 'Login' },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    isPrivate: false,
    pageTitle: 'Forgot Password',
  },
  {
    path: '/register',
    component: Register,
    isPrivate: false,
    pageTitle: 'Register',
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    isPrivate: false,
    pageTitle: 'Reset Password',
  },
];

export default routes;
