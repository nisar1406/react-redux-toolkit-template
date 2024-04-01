import { AxiosRequestConfig } from 'axios';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useToast from './useToast';
import api from '../app/api/api';
import { setApiStatus } from '../app/store/apiSlice';
import { RootState } from '../app/store/store';

// Define a generic type for the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IData = Record<string, any> | any;

interface ApiResponse {
  data: null;
  error: string | null;
}

const useApiRequest = () => {
  const { isLoading, isOnline } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch();
  const { showErrorToast, showInfoToast } = useToast(); // Use the useToast hook

  const [response, setResponse] = useState<ApiResponse>({
    data: null,
    error: null,
  });

  const [isRequestPending, setRequestPending] = useState<boolean>(false);

  const makeRequest = useCallback(
    async <T extends IData>(
      method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
      url: string,
      data: T = {} as T,
      options: AxiosRequestConfig = {}
    ) => {
      if (isRequestPending) {
        console.log('Request is already pending, queuing...');
        return;
      }

      setResponse({ data: null, error: null });
      if (!isOnline) {
        showInfoToast(`You are offline.`);
        return;
      }

      setRequestPending(true); // Set request pending flag
      // Dispatch 'loading' status
      dispatch(setApiStatus({ status: 'loading' }));

      try {
        const response = await api.request({
          method,
          url,
          data,
          ...options,
        });

        setResponse({ data: response.data, error: null });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
        showErrorToast(err.message || 'An error occurred');
        throw err;
      } finally {
        // Handle loading state if needed
        dispatch(setApiStatus({ status: 'idle' }));
        setRequestPending(false); // Reset request pending flag
      }
    },
    [isOnline, isRequestPending, dispatch, showErrorToast]
  );

  const fetchData = useCallback(
    <T extends IData>(
      method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
      url: string,
      data: T = {} as T,
      options: AxiosRequestConfig = {}
    ) => {
      makeRequest(method, url, data, options);
    },
    [makeRequest]
  );

  return {
    isLoading,
    fetchData,
    response,
  };
};

export default useApiRequest;
