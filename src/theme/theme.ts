import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C63FF',
      light: '#9D97FF',
      dark: '#4B44CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6584',
      light: '#FF94A8',
      dark: '#CC4D68',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F2FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#12122A',
      secondary: '#6B7280',
    },
    success: { main: '#10B981' },
    error:   { main: '#EF4444' },
    warning: { main: '#F59E0B' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600, letterSpacing: '-0.005em' },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    caption: { letterSpacing: '0.02em' },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.015em',
    },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 11,
          padding: '10px 26px',
          boxShadow: 'none',
          transition:
            'box-shadow 0.22s ease, transform 0.18s ease, background-color 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(108, 99, 255, 0.30)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7B74FF 0%, #6C63FF 50%, #5A53E8 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8A83FF 0%, #7B74FF 50%, #6C63FF 100%)',
            boxShadow: '0 8px 28px rgba(108, 99, 255, 0.38)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            boxShadow: '0 4px 16px rgba(108, 99, 255, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 11,
            transition: 'box-shadow 0.22s ease',
            backgroundColor: 'rgba(255,255,255,0.7)',
            '&:hover': {
              boxShadow: '0 2px 12px rgba(108, 99, 255, 0.09)',
            },
            '&.Mui-focused': {
              backgroundColor: '#fff',
              boxShadow: '0 0 0 3.5px rgba(108, 99, 255, 0.14)',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 24px rgba(18, 18, 42, 0.07)',
          borderRadius: 20,
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 20 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: '0 32px 100px rgba(18, 18, 42, 0.25), 0 0 0 1px rgba(255,255,255,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: '0.01em',
          transition: 'box-shadow 0.18s ease',
        },
        outlinedPrimary: {
          '&:hover': {
            boxShadow: '0 2px 8px rgba(108,99,255,0.2)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.18s ease, transform 0.15s ease',
          '&:hover': { transform: 'scale(1.08)' },
          '&:active': { transform: 'scale(0.95)' },
        },
      },
    },
  },
});

export default theme;
