import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';

import apiSlice, { ApiState } from './apiSlice';
import headerSlice, { HeaderState } from './headerSlice';
import modalSlice, { ModalState } from './modalSlice';
import rightDrawerSlice, { RightDrawerState } from './rightDrawerSlice';
// import leadsSlice from '../features/leads/leadSlice'

export interface RootState {
  header: HeaderState;
  modal: ModalState;
  rightDrawer: RightDrawerState;
  api: ApiState;
  // Add more state slices here as needed
}

// Define a type for the reducer map
type ReducerMap = {
  [K in keyof RootState]: Reducer<RootState[K]>;
};

// Combine all reducers into a single reducer
const reducers: ReducerMap = {
  header: headerSlice,
  modal: modalSlice,
  rightDrawer: rightDrawerSlice,
  api: apiSlice,
  // Add more reducers here as needed
};

// Create the store
const store = configureStore({
  reducer: combineReducers(reducers),
});

export default store;
