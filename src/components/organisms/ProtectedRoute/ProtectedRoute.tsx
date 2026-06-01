import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import { PROTECTED_REDIRECT_PATH } from './ProtectedRouteConstants';

/**
 * Wraps a set of routes that require authentication.
 *
 * If the user is not authenticated, they are redirected to PROTECTED_REDIRECT_PATH
 * with the original `location` stored in router state so we can navigate back
 * after a successful login.
 */
const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PROTECTED_REDIRECT_PATH}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
