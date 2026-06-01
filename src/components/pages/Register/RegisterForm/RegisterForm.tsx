import React, { useCallback, useState } from 'react';
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  FIELD_META,
  INITIAL_FORM_ERRORS,
  INITIAL_FORM_TOUCHED,
  INITIAL_FORM_VALUES,
  type RegisterFormErrors,
  type RegisterFormTouched,
  type RegisterFormValues,
  isFormValid,
  validateField,
  validateForm,
} from './RegisterFormConstants';
import { FormGrid, FullWidthField, SubmitRow } from './RegisterFormStyles';


interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => void;
  isLoading: boolean;
}


const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading }) => {
  const [values, setValues] = useState<RegisterFormValues>(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState<RegisterFormErrors>(INITIAL_FORM_ERRORS);
  const [touched, setTouched] = useState<RegisterFormTouched>(INITIAL_FORM_TOUCHED);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const field = name as keyof RegisterFormValues;

      setValues((prev) => {
        const next = { ...prev, [field]: value };
        // Re-validate touched fields on change
        if (touched[field]) {
          const error = validateField(field, value, next);
          setErrors((prevErr) => ({ ...prevErr, [field]: error }));
        }
        // Also re-validate confirmPassword when password changes
        if (field === 'password' && touched.confirmPassword) {
          const confirmError = validateField('confirmPassword', next.confirmPassword, next);
          setErrors((prevErr) => ({ ...prevErr, confirmPassword: confirmError }));
        }
        return next;
      });
    },
    [touched],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const field = name as keyof RegisterFormValues;

      setTouched((prev) => ({ ...prev, [field]: true }));
      const error = validateField(field, value, values);
      setErrors((prev) => ({ ...prev, [field]: error }));
    },
    [values],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched: RegisterFormTouched = {
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true,
      };
      setTouched(allTouched);

      const formErrors = validateForm(values);
      setErrors(formErrors);

      if (Object.keys(formErrors).length === 0) {
        onSubmit(values);
      }
    },
    [values, onSubmit],
  );

  const valid = isFormValid(values);


  const passwordAdornment = (
    show: boolean,
    toggle: () => void,
  ) => ({
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={toggle} edge="end" size="small" tabIndex={-1}>
          {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormGrid>
        {/* First Name */}
        <TextField
          name="firstName"
          label={FIELD_META.firstName.label}
          placeholder={FIELD_META.firstName.placeholder}
          type={FIELD_META.firstName.type}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          disabled={isLoading}
          autoComplete="given-name"
          fullWidth
        />

        {/* Last Name */}
        <TextField
          name="lastName"
          label={FIELD_META.lastName.label}
          placeholder={FIELD_META.lastName.placeholder}
          type={FIELD_META.lastName.type}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
          disabled={isLoading}
          autoComplete="family-name"
          fullWidth
        />

        {/* Email */}
        <FullWidthField>
          <TextField
            name="email"
            label={FIELD_META.email.label}
            placeholder={FIELD_META.email.placeholder}
            type={FIELD_META.email.type}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isLoading}
            autoComplete="email"
            fullWidth
          />
        </FullWidthField>

        {/* Password */}
        <TextField
          name="password"
          label={FIELD_META.password.label}
          placeholder={FIELD_META.password.placeholder}
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          disabled={isLoading}
          autoComplete="new-password"
          fullWidth
          InputProps={passwordAdornment(showPassword, () =>
            setShowPassword((v) => !v),
          )}
        />

        {/* Confirm Password */}
        <TextField
          name="confirmPassword"
          label={FIELD_META.confirmPassword.label}
          placeholder={FIELD_META.confirmPassword.placeholder}
          type={showConfirm ? 'text' : 'password'}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
          disabled={isLoading}
          autoComplete="new-password"
          fullWidth
          InputProps={passwordAdornment(showConfirm, () =>
            setShowConfirm((v) => !v),
          )}
        />

        {/* Submit */}
        <SubmitRow>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isLoading || !valid}
            startIcon={
              isLoading ? <CircularProgress size={18} color="inherit" /> : null
            }
          >
            {isLoading ? 'Creating your account…' : 'Create Account'}
          </Button>
        </SubmitRow>
      </FormGrid>
    </form>
  );
};

export default RegisterForm;
