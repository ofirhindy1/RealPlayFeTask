

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFormErrors = Partial<Record<keyof RegisterFormValues, string>>;

export type RegisterFormTouched = Partial<Record<keyof RegisterFormValues, boolean>>;


export const INITIAL_FORM_VALUES: RegisterFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const INITIAL_FORM_ERRORS: RegisterFormErrors = {};
export const INITIAL_FORM_TOUCHED: RegisterFormTouched = {};


export const FIELD_META: Record<
  keyof RegisterFormValues,
  { label: string; placeholder: string; type: string }
> = {
  firstName: { label: 'First Name', placeholder: 'Jane', type: 'text' },
  lastName: { label: 'Last Name', placeholder: 'Doe', type: 'text' },
  email: { label: 'Email Address', placeholder: 'jane@example.com', type: 'email' },
  password: { label: 'Password', placeholder: 'Min. 8 characters', type: 'password' },
  confirmPassword: { label: 'Confirm Password', placeholder: 'Repeat your password', type: 'password' },
};


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const validateField = (
  field: keyof RegisterFormValues,
  value: string,
  allValues: RegisterFormValues,
): string | undefined => {
  const trimmed = value.trim();

  switch (field) {
    case 'firstName':
      if (!trimmed) return 'First name is required.';
      if (trimmed.length < 2) return 'First name must be at least 2 characters.';
      return undefined;

    case 'lastName':
      if (!trimmed) return 'Last name is required.';
      if (trimmed.length < 2) return 'Last name must be at least 2 characters.';
      return undefined;

    case 'email':
      if (!trimmed) return 'Email address is required.';
      if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email address.';
      return undefined;

    case 'password':
      if (!value) return 'Password is required.';
      if (value.length < MIN_PASSWORD_LENGTH)
        return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
      return undefined;

    case 'confirmPassword':
      if (!value) return 'Please confirm your password.';
      if (value !== allValues.password) return 'Passwords do not match.';
      return undefined;

    default:
      return undefined;
  }
};

/**
 * Validates the entire form and returns a map of all errors.
 * Returns an empty object if the form is valid.
 */
export const validateForm = (
  values: RegisterFormValues,
): RegisterFormErrors => {
  const errors: RegisterFormErrors = {};
  (Object.keys(values) as Array<keyof RegisterFormValues>).forEach((field) => {
    const error = validateField(field, values[field], values);
    if (error) errors[field] = error;
  });
  return errors;
};

/** Returns true only if there are zero validation errors. */
export const isFormValid = (values: RegisterFormValues): boolean =>
  Object.keys(validateForm(values)).length === 0;
