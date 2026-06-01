import React from 'react';
import { Button, Dialog, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  PROMO_MODAL_BODY,
  PROMO_MODAL_CTA,
  PROMO_MODAL_TITLE,
} from './PromoModalConstants';
import {
  PromoCodeChip,
  PromoDialogContent,
  PromoHeroBox,
} from './PromoModalStyles';

interface PromoModalProps {
  open: boolean;
  promoCode: string;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({
  open,
  promoCode,
  onClose,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="xs"
    fullWidth
    PaperProps={{ sx: { borderRadius: '22px', overflow: 'hidden' } }}
  >
    <PromoHeroBox>
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
      <Typography fontSize="3rem" sx={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.20))' }}>🏷️</Typography>
      <Typography variant="h5" fontWeight={700} sx={{ textShadow: '0 2px 12px rgba(0,0,0,0.18)', letterSpacing: '-0.01em' }}>
        {PROMO_MODAL_TITLE}
      </Typography>
      <PromoCodeChip>{promoCode.toUpperCase()}</PromoCodeChip>
    </PromoHeroBox>

    <PromoDialogContent>
      <Typography variant="body1" color="text.secondary" mb={3}>
        {PROMO_MODAL_BODY(promoCode)}
      </Typography>
      <Button variant="contained" color="warning" fullWidth size="large" onClick={onClose}>
        {PROMO_MODAL_CTA}
      </Button>
    </PromoDialogContent>
  </Dialog>
);

export default PromoModal;
