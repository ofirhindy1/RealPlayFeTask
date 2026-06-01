import React from 'react';
import { Button, Dialog, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  WELCOME_MODAL_BODY,
  WELCOME_MODAL_CTA,
  WELCOME_MODAL_TITLE,
} from './WelcomeModalConstants';
import {
  ConfettiEmoji,
  HeroBox,
  WelcomeDialogContent,
} from './WelcomeModalStyles';

interface WelcomeModalProps {
  open: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="xs"
    fullWidth
    PaperProps={{ sx: { borderRadius: '22px', overflow: 'hidden' } }}
  >
    <HeroBox>
      <IconButton
        onClick={onClose}
        size="small"
        sx={{
          position: 'absolute',
          top: 14,
          right: 14,
          color: 'white',
          bgcolor: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.25)',
          transition: 'background-color 0.18s ease, transform 0.15s ease',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.30)', transform: 'scale(1.1)' },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <ConfettiEmoji>🎉</ConfettiEmoji>
      <Typography variant="h5" fontWeight={700}>
        {WELCOME_MODAL_TITLE}
      </Typography>
    </HeroBox>

    <WelcomeDialogContent>
      <Typography variant="body1" color="text.secondary" mb={3}>
        {WELCOME_MODAL_BODY}
      </Typography>
      <Button variant="contained" fullWidth size="large" onClick={onClose}>
        {WELCOME_MODAL_CTA}
      </Button>
    </WelcomeDialogContent>
  </Dialog>
);

export default WelcomeModal;
