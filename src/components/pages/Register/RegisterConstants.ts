import type { RegisterFormValues } from './RegisterForm/RegisterFormConstants';
import type { AttributionData } from '@/hooks/useAttribution';


export const REGISTER_TITLE = 'Create your account';
export const REGISTER_SUBTITLE = 'Join thousands of users already on RealPlay.';
export const REGISTER_LOGIN_PROMPT = 'Already have an account?';
export const REGISTER_LOGIN_LINK = 'Sign in';


export interface RegisterPayload extends RegisterFormValues {
  attribution?: AttributionData;
}

export interface RegisterResponse {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Mocked registration API call.
 * Simulates a 1 second network round-trip and always resolves successfully.
 * Swap this with a real fetch() call in production.
 */
export const mockRegisterApi = (
  payload: RegisterPayload,
): Promise<RegisterResponse> =>
  new Promise<RegisterResponse>((resolve) =>
    setTimeout(
      () =>
        resolve({
          userId: `usr_${Math.random().toString(36).slice(2, 10)}`,
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
        }),
      1000,
    ),
  );

export const REGISTER_SUCCESS_TOAST = 'Account created! Welcome aboard 🎉';
export const REGISTER_SUCCESS_REDIRECT = '/account';
