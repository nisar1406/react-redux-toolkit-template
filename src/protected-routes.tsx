import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import checkAuth from './app/auth';
import Layout from './containers/Layout';

export interface IChildren {
  children: React.ReactNode;
}

interface IProtectedRoute extends IChildren {
  isPrivate: boolean; // Adding optional isPrivate prop
  pageTitle: string;
}

const ProtectedRoutes = ({
  children,
  isPrivate,
  pageTitle,
}: IProtectedRoute) => {
  const token = checkAuth();

  useEffect(() => {
    const title = 'react-redux-toolkit-template';
    document.title = `${title} | ${pageTitle}`;
  }, [pageTitle]);

  if (isPrivate && !token) {
    return <Navigate to="/login" />;
  }

  return <Layout>{children}</Layout>;
};

export default ProtectedRoutes;
