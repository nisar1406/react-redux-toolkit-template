import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Bounce } from "react-toastify";
// import { CustomToastContainerProps } from "../../components/Toast";

export interface HeaderState {
  pageTitle: string;
  noOfNotifications: number;
  newNotificationMessage: string;
  newNotificationStatus: number;
  // notificationDetails: any; //CustomToastContainerProps;
}

const initialState: HeaderState = {
  pageTitle: 'Home',
  noOfNotifications: 15,
  newNotificationMessage: '',
  newNotificationStatus: 1,
  // notificationDetails: {
  //   type: '',
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   newestOnTop: false,
  //   closeOnClick: false,
  //   rtl: false,
  //   pauseOnFocusLoss: false,
  //   draggable: false,
  //   pauseOnHover: false,
  //   theme: "light",
  //   transition: Bounce,
  //   message: ''
  // },
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setPageTitle: (
      state: HeaderState,
      action: PayloadAction<{ title: string }>
    ) => {
      state.pageTitle = action.payload.title;
    },

    removeNotificationMessage: (state: HeaderState) => {
      state.newNotificationMessage = '';
    },

    showNotification: (
      state: HeaderState,
      action: PayloadAction<{ message: string; status: number }>
    ) => {
      state.newNotificationMessage = action.payload.message;
      state.newNotificationStatus = action.payload.status;
      // state.notificationDetails = action.payload;
    },
  },
});

export const { setPageTitle, removeNotificationMessage, showNotification } =
  headerSlice.actions;

export default headerSlice.reducer;
