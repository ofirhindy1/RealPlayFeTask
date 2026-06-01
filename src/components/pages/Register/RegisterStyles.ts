import { styled, keyframes } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const RegisterPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  background: `
    radial-gradient(ellipse 75% 50% at 50% 0%, ${theme.palette.primary.light}26 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 100% 100%, ${theme.palette.secondary.light}18 0%, transparent 60%),
    linear-gradient(180deg, #ECEFFE 0%, #F0F2FA 100%)
  `,
}));

export const RegisterCard = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 520,
  padding: theme.spacing(5.5, 5),
  background: 'rgba(255, 255, 255, 0.88)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow:
    '0 4px 6px rgba(18,18,42,0.04), 0 12px 56px rgba(18, 18, 42, 0.11), 0 0 0 1px rgba(255,255,255,0.75)',
  border: '1px solid rgba(255,255,255,0.7)',
  animation: `${fadeInUp} 0.6s cubic-bezier(0.22,1,0.36,1) both`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 3),
    boxShadow: '0 4px 24px rgba(18, 18, 42, 0.08)',
  },
}));

export const BrandMark = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: 17,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  boxShadow:
    '0 4px 8px rgba(108,99,255,0.20), 0 8px 28px rgba(108, 99, 255, 0.38)',
  color: '#fff',
  fontWeight: 800,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.03em',
}));

export const DividerRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  margin: theme.spacing(3, 0, 2.5),
  '&::before, &::after': {
    content: '""',
    flex: 1,
    height: 1,
    background: `linear-gradient(90deg, transparent, ${theme.palette.divider}BB, transparent)`,
  },
}));
