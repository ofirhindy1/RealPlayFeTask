import { styled, keyframes } from '@mui/material/styles';
import { Avatar, Box, Card } from '@mui/material';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const AccountPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(6, 3, 10),
  background: `
    radial-gradient(ellipse 75% 45% at 50% 0%, ${theme.palette.primary.light}22 0%, transparent 65%),
    linear-gradient(180deg, #ECEFFE 0%, #F0F2FA 100%)
  `,
}));

export const AccountInner = styled(Box)({
  maxWidth: 820,
  margin: '0 auto',
  animation: `${fadeInUp} 0.55s cubic-bezier(0.22,1,0.36,1) both`,
});

export const ProfileCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4, 4.5),
  marginBottom: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  background: 'rgba(255,255,255,0.86)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  border: '1px solid rgba(255,255,255,0.82)',
  boxShadow:
    '0 4px 6px rgba(18,18,42,0.03), 0 8px 40px rgba(18, 18, 42, 0.09)',
  transition: 'box-shadow 0.25s ease',
  '&:hover': {
    boxShadow: '0 12px 56px rgba(18, 18, 42, 0.13)',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(3, 3),
  },
}));

export const GradientAvatar = styled(Avatar)(({ theme }) => ({
  width: 86,
  height: 86,
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  boxShadow:
    '0 4px 10px rgba(108,99,255,0.22), 0 8px 28px rgba(108,99,255,0.32)',
  flexShrink: 0,
  transition: 'box-shadow 0.22s ease, transform 0.22s ease',
  '&:hover': {
    transform: 'scale(1.04)',
    boxShadow: '0 8px 24px rgba(108,99,255,0.42)',
  },
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const StatCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3.5, 3),
  textAlign: 'center',
  background: 'rgba(255,255,255,0.82)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(255,255,255,0.85)',
  boxShadow: '0 2px 20px rgba(18, 18, 42, 0.07)',
  transition:
    'transform 0.26s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.26s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 14px 44px rgba(108, 99, 255, 0.16)',
  },
}));

export const StatValue = styled(Box)(({ theme }) => ({
  fontSize: '2.25rem',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 2px 6px rgba(108,99,255,0.18))',
}));

export const AttributionCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3, 3.5),
  background: `linear-gradient(140deg, rgba(108,99,255,0.04) 0%, rgba(157,151,255,0.08) 100%)`,
  border: `1px solid rgba(108,99,255,0.14)`,
  boxShadow: '0 2px 18px rgba(108,99,255,0.07)',
}));

export const AttributionRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0.875, 0),
  borderBottom: `1px solid rgba(108,99,255,0.08)`,
  transition: 'background 0.16s ease',
  '&:last-child': { borderBottom: 'none' },
}));
