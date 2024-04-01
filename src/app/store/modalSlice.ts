import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IData } from '../../hooks/useApiRequest';

export interface ModalState {
  title: string;
  isOpen: boolean;
  bodyType: string;
  size: string;
  extraObject: IData; // Adjust the type according to your needs
}

const initialState: ModalState = {
  title: '',
  isOpen: false,
  bodyType: '',
  size: '',
  extraObject: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      action: PayloadAction<{
        title: string;
        bodyType: string;
        extraObject: IData;
        size?: string;
      }>
    ) => {
      const { title, bodyType, extraObject, size } = action.payload;
      state.isOpen = true;
      state.bodyType = bodyType;
      state.title = title;
      state.size = size || 'md';
      state.extraObject = extraObject;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.bodyType = '';
      state.title = '';
      state.extraObject = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
