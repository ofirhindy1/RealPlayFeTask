import { styled, keyframes } from '@mui/material/styles';
import { Box, Card, ButtonBase } from '@mui/material';

const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const TopBar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  padding: theme.spacing(2.5, 3),
  zIndex: theme.zIndex.appBar,
  animation: `${fadeInDown} 0.5s cubic-bezier(0.22,1,0.36,1) both`,
}));

export const AccountPill = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1.75),
  borderRadius: 999,
  background: 'rgba(255, 255, 255, 0.80)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow:
    '0 2px 20px rgba(18, 18, 42, 0.10), 0 0 0 1px rgba(108,99,255,0.12)',
  border: '1px solid rgba(255,255,255,0.65)',
  cursor: 'pointer',
  transition: 'box-shadow 0.22s ease, transform 0.18s ease',
  '&:hover': {
    boxShadow:
      '0 8px 32px rgba(108, 99, 255, 0.24), 0 0 0 1px rgba(108,99,255,0.22)',
    transform: 'translateY(-1px)',
  },
}));

export const PillAvatar = styled(Box)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  boxShadow: '0 2px 8px rgba(108,99,255,0.40)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(14, 3, 8),
  position: 'relative',
  overflow: 'hidden',
  background: `
    radial-gradient(ellipse 90% 55% at 50% -5%, ${theme.palette.primary.light}30 0%, transparent 68%),
    radial-gradient(ellipse 50% 35% at 10% 90%, ${theme.palette.secondary.light}18 0%, transparent 55%),
    linear-gradient(180deg, #ECEFFE 0%, #F0F2FA 100%)
  `,
}));

export const GradientHeadline = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
  fontWeight: 800,
  lineHeight: 1.02,
  letterSpacing: '-0.045em',
  background: `linear-gradient(140deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 45%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 4px 32px rgba(108,99,255,0.22))',
  animation: `${fadeInUp} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
}));

export const HeroTagline = styled(Box)({
  animation: `${fadeInUp} 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both`,
});

export const HeroDescription = styled(Box)({
  animation: `${fadeInUp} 0.7s 0.18s cubic-bezier(0.22,1,0.36,1) both`,
});

export const HeroCTARow = styled(Box)({
  animation: `${fadeInUp} 0.7s 0.26s cubic-bezier(0.22,1,0.36,1) both`,
});

export const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: theme.spacing(3),
  maxWidth: 920,
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(0, 3, 10),
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4, 3.5),
  textAlign: 'center',
  transition:
    'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease',
  cursor: 'default',
  background: 'rgba(255,255,255,0.80)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.92)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 56px rgba(108, 99, 255, 0.18)',
  },
}));

export const FeatureEmoji = styled('span')({
  fontSize: '2.75rem',
  display: 'block',
  marginBottom: '0.875rem',
  filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.14))',
  transition: 'filter 0.22s ease, transform 0.22s ease',
  '.MuiCard-root:hover &': {
    filter: 'drop-shadow(0 6px 14px rgba(108,99,255,0.25))',
    transform: 'scale(1.08)',
  },
});
