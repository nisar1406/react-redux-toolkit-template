import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IData } from '../../hooks/useApiRequest';

export interface RightDrawerState {
  header: string;
  isOpen: boolean;
  bodyType: string;
  extraObject: IData; // Adjust the type according to your needs
}

const initialState: RightDrawerState = {
  header: '',
  isOpen: false,
  bodyType: '',
  extraObject: {},
};

export const rightDrawerSlice = createSlice({
  name: 'rightDrawer',
  initialState,
  reducers: {
    openRightDrawer: (
      state: RightDrawerState,
      action: PayloadAction<{
        header: string;
        bodyType: string;
        extraObject?: IData;
      }>
    ) => {
      const { header, bodyType, extraObject } = action.payload;
      state.isOpen = true;
      state.bodyType = bodyType;
      state.header = header;
      state.extraObject = extraObject;
    },

    closeRightDrawer: (state: RightDrawerState) => {
      state.isOpen = false;
      state.bodyType = '';
      state.header = '';
      state.extraObject = {};
    },
  },
});

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions;

export default rightDrawerSlice.reducer;
