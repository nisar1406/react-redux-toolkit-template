import {
  toast,
  ToastContent,
  ToastOptions,
  ToastPromiseParams,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { IData } from './useApiRequest';

type ToastHookOptions = ToastOptions;

// Redefined ToastFunction type
type ToastFunction = {
  (content: ToastContent, options?: ToastOptions): number;
  (
    promise: Promise<IData>,
    { pending, error, success }: ToastPromiseParams<IData, IData, IData>,
    options?: ToastOptions
  ): Promise<number>;
  error: (message: ToastContent, options?: ToastOptions) => number;
  success: (message: ToastContent, options?: ToastOptions) => number;
  info: (message: ToastContent, options?: ToastOptions) => number;
  warning: (message: ToastContent, options?: ToastOptions) => number;
};

const useToast = () => {
  // Cast toast to the defined ToastFunction type
  const showToastByType = (
    message: string,
    type: keyof ToastFunction,
    options?: ToastHookOptions
  ) => {
    toast[type](message, options);
  };

  return {
    showErrorToast: (errorMessage: string, options?: ToastHookOptions) =>
      showToastByType(errorMessage, 'error', options),
    showSuccessToast: (successMessage: string, options?: ToastHookOptions) =>
      showToastByType(successMessage, 'success', options),
    showInfoToast: (infoMessage: string, options?: ToastHookOptions) =>
      showToastByType(infoMessage, 'info', options),
    showWarningToast: (warningMessage: string, options?: ToastHookOptions) =>
      showToastByType(warningMessage, 'warning', options),
  };
};

export default useToast;
