import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import checkAuth from './app/auth';
import Layout from './containers/Layout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from './app/store/headerSlice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: pageTitle }));
  }, [pageTitle]);

  if (isPrivate && !token) {
    return <Navigate to="/login" />;
  }

  return <Layout>{children}</Layout>;
};

export default ProtectedRoutes;
