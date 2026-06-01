export const ACCOUNT_TITLE = 'My Account';
export const ACCOUNT_WELCOME = (name: string) => `Welcome back, ${name}!`;
export const ACCOUNT_SUBTITLE =
  'Manage your profile, explore your activity, and configure your preferences.';
export const ACCOUNT_LOGOUT_LABEL = 'Sign Out';
export const ACCOUNT_MODAL_TEST_LABEL = 'Test Modal Stack';

export interface QuickStatItem {
  label: string;
  value: string;
  emoji: string;
}

export const QUICK_STATS: QuickStatItem[] = [
  { label: 'Sessions', value: '24', emoji: '🎯' },
  { label: 'Saved Items', value: '138', emoji: '🔖' },
  { label: 'Days Active', value: '7', emoji: '📅' },
];
