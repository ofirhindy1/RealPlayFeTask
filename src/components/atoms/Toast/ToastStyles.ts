import { styled } from '@mui/material/styles';
import { Alert, Snackbar } from '@mui/material';

export const StyledSnackbar = styled(Snackbar)({
  '& .MuiSnackbarContent-root': {
    borderRadius: 14,
  },
});

export const StyledAlert = styled(Alert)(({ theme }) => ({
  borderRadius: 14,
  fontWeight: 500,
  alignItems: 'center',
  boxShadow: '0 8px 32px rgba(18, 18, 42, 0.18), 0 0 0 1px rgba(255,255,255,0.15)',
  minWidth: 320,
  backdropFilter: 'blur(8px)',
  letterSpacing: '0.01em',
  '& .MuiAlert-icon': {
    fontSize: 22,
  },
  '& .MuiAlert-message': {
    fontSize: '0.9375rem',
    padding: '2px 0',
  },
  variants: [],
  [theme.breakpoints.down('sm')]: {
    minWidth: 'unset',
    width: '90vw',
  },
}));
