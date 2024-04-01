import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import useApiRequest, { IData } from './useApiRequest';
import {
  clearLocalStorage,
  saveDataToLocalStorage,
} from '../utils/helpers/localStorageHelper';

// Create context for authentication
const AuthContext = createContext<{
  user: IData | null;
  login: (data: IData) => void;
  logout: () => void;
} | null>(null);

// Provider component for authentication
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { fetchData, response } = useApiRequest();
  const [user, setUser] = useState<IData | null>(null);
  // Function to login user
  const login = async (data: IData) => {
    saveDataToLocalStorage('user', data);
    saveDataToLocalStorage('token', 'DummyToken');
    navigate('/dashboard');
  };

  // Function to logout user
  const logout = () => {
    clearLocalStorage();
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!user) {
      fetchData('GET', '/todos/99'); // Fetch user details from API
    }
  }, [user]);

  useEffect(() => {
    if (response) {
      setUser(response.data);
    }
  }, [response]);

  // Memoize value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  // Provide authentication context value to children components
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
