import React from 'react';
import { Button, Dialog, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  INVITE_MODAL_BODY,
  INVITE_MODAL_CTA,
  INVITE_MODAL_TITLE,
} from './InviteModalConstants';
import {
  InviteDialogContent,
  InviteHeroBox,
  InviteIdBadge,
} from './InviteModalStyles';

interface InviteModalProps {
  open: boolean;
  inviteId: string;
  onClose: () => void;
}

const InviteModal: React.FC<InviteModalProps> = ({
  open,
  inviteId,
  onClose,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="xs"
    fullWidth
    PaperProps={{ sx: { borderRadius: '22px', overflow: 'hidden' } }}
  >
    <InviteHeroBox>
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
      <Typography fontSize="3rem" sx={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.20))' }}>🤝</Typography>
      <Typography variant="h5" fontWeight={700} sx={{ textShadow: '0 2px 12px rgba(0,0,0,0.18)', letterSpacing: '-0.01em' }}>
        {INVITE_MODAL_TITLE}
      </Typography>
      <InviteIdBadge>ID: {inviteId}</InviteIdBadge>
    </InviteHeroBox>

    <InviteDialogContent>
      <Typography variant="body1" color="text.secondary" mb={3}>
        {INVITE_MODAL_BODY(inviteId)}
      </Typography>
      <Button variant="contained" color="success" fullWidth size="large" onClick={onClose}>
        {INVITE_MODAL_CTA}
      </Button>
    </InviteDialogContent>
  </Dialog>
);

export default InviteModal;
