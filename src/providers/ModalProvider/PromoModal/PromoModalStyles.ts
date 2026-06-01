import { styled } from '@mui/material/styles';
import { Box, DialogContent } from '@mui/material';

export const PromoHeroBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(140deg, #E67E22 0%, ${theme.palette.warning.main} 45%, ${theme.palette.secondary.main} 100%)`,
  borderRadius: '18px 18px 0 0',
  padding: theme.spacing(5.5, 4, 4.5),
  textAlign: 'center',
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(255,255,255,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

export const PromoCodeChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.35)',
  borderRadius: 10,
  padding: theme.spacing(0.875, 2.5),
  fontFamily: '"Courier New", monospace',
  fontSize: '1.3rem',
  fontWeight: 700,
  letterSpacing: 3,
  color: '#fff',
  marginTop: theme.spacing(1.5),
  boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  textShadow: '0 1px 4px rgba(0,0,0,0.2)',
}));

export const PromoDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3.5, 4, 4.5),
  textAlign: 'center',
}));
