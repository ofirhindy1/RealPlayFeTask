import type { AlertColor } from '@mui/material';


export interface ToastMessage {
  message: string;
  severity: AlertColor;
  duration?: number;
}

export interface ToastContextType {
  showToast: (options: ToastMessage) => void;
}


export const DEFAULT_TOAST_DURATION = 4000;
export const TOAST_ANCHOR = {
  vertical: 'bottom' as const,
  horizontal: 'center' as const,
};
