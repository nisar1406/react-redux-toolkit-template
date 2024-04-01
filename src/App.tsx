import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import themeChange from 'theme-change';

import initializeApp from './app/init';
import { setOnlineStatus } from './app/store/apiSlice';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoutes from './protected-routes';
import routes, { IRoute } from './routes/index';
import useToast from './hooks/useToast';

// Initializing different libraries
initializeApp();

const App = React.memo(() => {
  const dispatch = useDispatch();
  const { showInfoToast } = useToast();

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange.themeChange(false);
  }, []);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      const isOnline = navigator.onLine;
      showInfoToast(isOnline ? 'You are back.' : 'You are currently offline.');
      dispatch(setOnlineStatus(isOnline));
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, [dispatch]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {routes.map((route: IRoute) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate ? (
                  <ProtectedRoutes
                    isPrivate={route.isPrivate}
                    pageTitle={route.pageTitle}
                  >
                    <route.component />
                  </ProtectedRoutes>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </AuthProvider>
    </Router>
  );
});

export default App;
