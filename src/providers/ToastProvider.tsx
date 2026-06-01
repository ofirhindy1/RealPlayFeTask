import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  DEFAULT_TOAST_DURATION,
  TOAST_ANCHOR,
  type ToastContextType,
  type ToastMessage,
} from '@/components/atoms/Toast/ToastConstants';
import { StyledAlert, StyledSnackbar } from '@/components/atoms/Toast/ToastStyles';


const ToastContext = createContext<ToastContextType | undefined>(undefined);


export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage>({
    message: '',
    severity: 'info',
    duration: DEFAULT_TOAST_DURATION,
  });

  const showToast = useCallback((options: ToastMessage) => {
    setToast({
      duration: DEFAULT_TOAST_DURATION,
      ...options,
    });
    setOpen(true);
  }, []);

  const handleClose = useCallback(
    (_event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') return;
      setOpen(false);
    },
    [],
  );

  const value = useMemo<ToastContextType>(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <StyledSnackbar
        open={open}
        autoHideDuration={toast.duration}
        onClose={handleClose}
        anchorOrigin={TOAST_ANCHOR}
      >
        <StyledAlert
          onClose={handleClose}
          severity={toast.severity}
          variant="filled"
        >
          {toast.message}
        </StyledAlert>
      </StyledSnackbar>
    </ToastContext.Provider>
  );
};


export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;
