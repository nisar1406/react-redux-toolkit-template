import checkAuth from '../app/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = (redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = checkAuth(); // Assuming checkAuth returns a token or null

    if (token) {
      navigate(redirectPath);
    }
  }, [navigate, redirectPath]);
};

export default useAuthRedirect;
