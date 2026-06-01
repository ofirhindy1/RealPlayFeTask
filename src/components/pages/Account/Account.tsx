import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Chip, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useAuth } from '@/providers/AuthProvider';
import { getStoredAttribution } from '@/hooks/useAttribution';
import {
  ACCOUNT_LOGOUT_LABEL,
  ACCOUNT_MODAL_TEST_LABEL,
  ACCOUNT_SUBTITLE,
  ACCOUNT_TITLE,
  ACCOUNT_WELCOME,
  QUICK_STATS,
} from './AccountConstants';
import {
  AccountInner,
  AccountPageWrapper,
  AttributionCard,
  AttributionRow,
  GradientAvatar,
  ProfileCard,
  StatCard,
  StatValue,
  StatsGrid,
} from './AccountStyles';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const attribution = getStoredAttribution();
  const initials = user
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : '?';

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <AccountPageWrapper>
      <AccountInner>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ letterSpacing: '-0.02em', textShadow: '0 2px 12px rgba(18,18,42,0.08)' }}
          >
            {ACCOUNT_TITLE}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            {ACCOUNT_LOGOUT_LABEL}
          </Button>
        </Stack>

        {/* Profile card */}
        <ProfileCard>
          <GradientAvatar>{initials}</GradientAvatar>
          <Stack flex={1} spacing={0.5}>
            <Typography variant="h5" fontWeight={700}>
              {user ? ACCOUNT_WELCOME(user.firstName) : ''}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ACCOUNT_SUBTITLE}
            </Typography>
          </Stack>
        </ProfileCard>

        {/* Quick stats */}
        <StatsGrid>
          {QUICK_STATS.map((stat) => (
            <StatCard key={stat.label}>
              <Typography fontSize="2.25rem" sx={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }}>
                {stat.emoji}
              </Typography>
              <StatValue>{stat.value}</StatValue>
              <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                {stat.label}
              </Typography>
            </StatCard>
          ))}
        </StatsGrid>

        {/* Attribution data panel */}
        {attribution && Object.keys(attribution).length > 0 && (
          <AttributionCard>
            <Typography variant="subtitle2" fontWeight={700} mb={1.5} color="primary">
              First-Touch Attribution Data
            </Typography>
            {Object.entries(attribution).map(([key, value]) => (
              <AttributionRow key={key}>
                <Typography variant="body2" color="text.secondary" fontFamily="monospace">
                  {key}
                </Typography>
                <Chip label={value} size="small" variant="outlined" color="primary" />
              </AttributionRow>
            ))}
          </AttributionCard>
        )}

        {/* Modal stack test buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            onClick={() => navigate('/account?welcome=1')}
          >
            {ACCOUNT_MODAL_TEST_LABEL}: Welcome
          </Button>
          <Button
            variant="outlined"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            onClick={() => navigate('/account?promo=SUMMER25')}
          >
            {ACCOUNT_MODAL_TEST_LABEL}: Promo
          </Button>
          <Button
            variant="outlined"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            onClick={() => navigate('/account?invite=abc123')}
          >
            {ACCOUNT_MODAL_TEST_LABEL}: Invite
          </Button>
        </Stack>
      </AccountInner>
    </AccountPageWrapper>
  );
};

export default Account;
