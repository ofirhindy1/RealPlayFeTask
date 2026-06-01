export const HOME_HEADLINE = 'RealPlay';
export const HOME_TAGLINE = 'The modern platform for re-imagining your experience.';
export const HOME_DESCRIPTION =
  'Discover a smarter way to manage, track, and elevate everything you care about. Sign up today and unlock the full experience.';
export const HOME_CTA_REGISTER = 'Create an Account';
export const HOME_CTA_ACCOUNT = 'Go to My Account';
export const HOME_LOGGED_IN_LABEL = (name: string) => `Logged in as ${name}`;

export interface FeatureItem {
  emoji: string;
  title: string;
  description: string;
}

export const FEATURE_LIST: FeatureItem[] = [
  {
    emoji: '⚡',
    title: 'Lightning Fast',
    description: 'Optimised for speed with sub-second response times across all features.',
  },
  {
    emoji: '🔒',
    title: 'Secure by Default',
    description: 'Your data is encrypted end-to-end and never sold to third parties.',
  },
  {
    emoji: '🌍',
    title: 'Works Everywhere',
    description: 'Responsive on every device — desktop, tablet, or mobile.',
  },
];
