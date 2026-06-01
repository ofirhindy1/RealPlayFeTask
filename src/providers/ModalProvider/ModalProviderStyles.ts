import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

/** Invisible wrapper – ModalProvider renders nothing in the DOM itself */
export const ModalProviderRoot = styled(Box)({
  display: 'contents',
});
