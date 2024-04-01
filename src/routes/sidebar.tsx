// import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon';
// import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon';
// import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon';
// import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon';
// import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
// import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon';
// import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
// import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import BoltIcon from '@heroicons/react/24/outline/BoltIcon';
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
// import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
// import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
// import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
// import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import WalletIcon from '@heroicons/react/24/outline/WalletIcon';
import React from 'react';

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

export interface Route {
  path: string;
  icon: React.ReactElement;
  name: string;
  submenu?: Route[];
}

const routes: Route[] = [
  {
    path: '/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  // {
  //   path: '/leads',
  //   icon: <InboxArrowDownIcon className={iconClasses} />,
  //   name: 'Leads',
  // },
  // {
  //   path: '/transactions',
  //   icon: <CurrencyDollarIcon className={iconClasses} />,
  //   name: 'Transactions',
  // },
  // {
  //   path: '/charts',
  //   icon: <ChartBarIcon className={iconClasses} />,
  //   name: 'Analytics',
  // },
  {
    path: '/integration',
    icon: <BoltIcon className={iconClasses} />,
    name: 'Integration',
  },
  // {
  //   path: '/calendar',
  //   icon: <CalendarDaysIcon className={iconClasses} />,
  //   name: 'Calendar',
  // },
  // {
  //   path: '',
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
  //   name: 'Pages',
  //   submenu: [
  //     {
  //       path: '/login',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Login',
  //     },
  //     {
  //       path: '/register',
  //       icon: <UserIcon className={submenuIconClasses} />,
  //       name: 'Register',
  //     },
  //     {
  //       path: '/forgot-password',
  //       icon: <KeyIcon className={submenuIconClasses} />,
  //       name: 'Forgot Password',
  //     },
  //     {
  //       path: '/blank',
  //       icon: <DocumentIcon className={submenuIconClasses} />,
  //       name: 'Blank Page',
  //     },
  //     {
  //       path: '/404',
  //       icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
  //       name: '404',
  //     },
  //   ],
  // },
  {
    path: '',
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
    name: 'Settings',
    submenu: [
      {
        path: '/settings-profile',
        icon: <UserIcon className={submenuIconClasses} />,
        name: 'Profile',
      },
      {
        path: '/settings-billing',
        icon: <WalletIcon className={submenuIconClasses} />,
        name: 'Billing',
      },
      {
        path: '/settings-team',
        icon: <UsersIcon className={submenuIconClasses} />,
        name: 'Team Members',
      },
    ],
  },
  // {
  //   path: '',
  //   icon: <DocumentTextIcon className={`${iconClasses} inline`} />,
  //   name: 'Documentation',
  //   submenu: [
  //     {
  //       path: '/getting-started',
  //       icon: <DocumentTextIcon className={submenuIconClasses} />,
  //       name: 'Getting Started',
  //     },
  //     {
  //       path: '/features',
  //       icon: <TableCellsIcon className={submenuIconClasses} />,
  //       name: 'Features',
  //     },
  //     {
  //       path: '/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
  //       name: 'Components',
  //     },
  //   ],
  // },
];

export default routes;
