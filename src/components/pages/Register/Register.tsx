import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Link, Typography } from '@mui/material';
import { useAuth } from '@/providers/AuthProvider';
import { useToast } from '@/providers/ToastProvider';
import { getStoredAttribution } from '@/hooks/useAttribution';
import {
  REGISTER_LOGIN_LINK,
  REGISTER_LOGIN_PROMPT,
  REGISTER_SUBTITLE,
  REGISTER_SUCCESS_REDIRECT,
  REGISTER_SUCCESS_TOAST,
  REGISTER_TITLE,
  mockRegisterApi,
  type RegisterPayload,
} from './RegisterConstants';
import {
  BrandMark,
  DividerRow,
  RegisterCard,
  RegisterPageWrapper,
} from './RegisterStyles';
import RegisterForm from './RegisterForm/RegisterForm';
import type { RegisterFormValues } from './RegisterForm/RegisterFormConstants';

const Register: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Redirect already-authenticated users away from register
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: RegisterPayload) => mockRegisterApi(payload),
    onSuccess: (data) => {
      // 1. Set auth context
      login({ email: data.email, firstName: data.firstName, lastName: data.lastName });

      // 2. Success toast
      showToast({ message: REGISTER_SUCCESS_TOAST, severity: 'success' });

      // 3. Navigate to account
      navigate(REGISTER_SUCCESS_REDIRECT, { replace: true });
    },
    onError: () => {
      showToast({
        message: 'Registration failed. Please try again.',
        severity: 'error',
      });
    },
  });

  const handleSubmit = (values: RegisterFormValues) => {
    const attribution = getStoredAttribution() ?? undefined;
    mutate({ ...values, attribution });
  };

  return (
    <RegisterPageWrapper>
      <RegisterCard elevation={0}>
        {/* Brand mark */}
        <BrandMark>R</BrandMark>

        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ letterSpacing: '-0.02em', textShadow: '0 2px 12px rgba(108,99,255,0.10)' }}
        >
          {REGISTER_TITLE}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3} sx={{ opacity: 0.85 }}>
          {REGISTER_SUBTITLE}
        </Typography>

        <DividerRow />

        {/* Native form – no external form library */}
        <RegisterForm onSubmit={handleSubmit} isLoading={isPending} />

        <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>
          {REGISTER_LOGIN_PROMPT}{' '}
          <Link
            component={RouterLink}
            to="/account"
            fontWeight={600}
            sx={{ transition: 'opacity 0.18s ease', '&:hover': { opacity: 0.75 } }}
          >
            {REGISTER_LOGIN_LINK}
          </Link>
        </Typography>
      </RegisterCard>
    </RegisterPageWrapper>
  );
};

export default Register;
