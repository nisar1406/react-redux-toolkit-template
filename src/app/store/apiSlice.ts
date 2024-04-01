import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IData } from '../../hooks/useApiRequest';

export interface SendRequestParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  data?: IData;
}

export interface ApiState {
  data: IData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isOnline: boolean;
  isLoading: boolean;
}

const initialState: ApiState = {
  data: [],
  status: 'idle',
  error: null,
  isOnline: true,
  isLoading: false,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApiStatus: (
      state: ApiState,
      action: PayloadAction<{
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
      }>
    ) => {
      if (action.payload.status === 'idle') {
        document.body.classList.remove('loading-indicator');
        state.isLoading = false;
      } else {
        document.body.classList.add('loading-indicator');
        state.isLoading = true;
      }
      state.status = action.payload.status;
    },
    setOnlineStatus: (state: ApiState, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { setApiStatus, setOnlineStatus } = apiSlice.actions;

export default apiSlice.reducer;
