import { styled } from '@mui/material/styles';
import { Box, DialogContent } from '@mui/material';

export const HeroBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(140deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
  borderRadius: '18px 18px 0 0',
  padding: theme.spacing(5.5, 4, 4.5),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
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

export const WelcomeDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3.5, 4, 4.5),
  textAlign: 'center',
}));

export const ConfettiEmoji = styled('span')({
  fontSize: '3.25rem',
  display: 'block',
  marginBottom: '0.625rem',
  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.20))',
});
