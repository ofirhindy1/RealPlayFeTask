import { styled } from '@mui/material/styles';
import { Box, DialogContent } from '@mui/material';

export const InviteHeroBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(140deg, #059669 0%, ${theme.palette.success.main} 45%, ${theme.palette.primary.main} 100%)`,
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

export const InviteIdBadge = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.35)',
  borderRadius: 10,
  padding: theme.spacing(0.625, 2),
  fontFamily: '"Courier New", monospace',
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: 1.5,
  color: '#fff',
  marginTop: theme.spacing(1.5),
  boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
}));

export const InviteDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3.5, 4, 4.5),
  textAlign: 'center',
}));
