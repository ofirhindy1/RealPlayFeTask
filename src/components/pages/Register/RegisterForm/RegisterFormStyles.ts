import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FormGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const FullWidthField = styled(Box)({
  gridColumn: '1 / -1',
});

export const SubmitRow = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  gridColumn: '1 / -1',
}));
