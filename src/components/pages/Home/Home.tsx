import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import {
  FEATURE_LIST,
  HOME_CTA_ACCOUNT,
  HOME_CTA_REGISTER,
  HOME_DESCRIPTION,
  HOME_HEADLINE,
  HOME_LOGGED_IN_LABEL,
  HOME_TAGLINE,
} from './HomeConstants';
import {
  AccountPill,
  FeatureCard,
  FeatureEmoji,
  FeaturesGrid,
  GradientHeadline,
  HeroCTARow,
  HeroDescription,
  HeroSection,
  HeroTagline,
  PillAvatar,
  TopBar,
} from './HomeStyles';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const initials = user
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : '';

  return (
    <>
      {isAuthenticated && (
        <TopBar>
          <AccountPill onClick={() => navigate('/account')}>
            <PillAvatar>{initials}</PillAvatar>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {HOME_LOGGED_IN_LABEL(user!.firstName)}
            </Typography>
          </AccountPill>
        </TopBar>
      )}

      <HeroSection>
        <GradientHeadline>{HOME_HEADLINE}</GradientHeadline>

        <HeroTagline>
          <Typography
            variant="h5"
            color="text.secondary"
            fontWeight={400}
            mt={2}
            mb={1}
            maxWidth={540}
            sx={{ letterSpacing: '-0.01em' }}
          >
            {HOME_TAGLINE}
          </Typography>
        </HeroTagline>

        <HeroDescription>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={5}
            maxWidth={460}
            sx={{ opacity: 0.85 }}
          >
            {HOME_DESCRIPTION}
          </Typography>
        </HeroDescription>

        <HeroCTARow>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {isAuthenticated ? (
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/account')}
            >
              {HOME_CTA_ACCOUNT}
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
            >
              {HOME_CTA_REGISTER}
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/?welcome=1')}
            disabled={!isAuthenticated}
            title={!isAuthenticated ? 'Log in to preview the welcome modal' : undefined}
          >
            Preview Welcome Modal
          </Button>
        </Stack>
        </HeroCTARow>
      </HeroSection>

      <FeaturesGrid>
        {FEATURE_LIST.map((feature) => (
          <FeatureCard key={feature.title}>
            <FeatureEmoji>{feature.emoji}</FeatureEmoji>
            <Typography variant="h6" fontWeight={700} mb={1}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </>
  );
};

export default Home;
