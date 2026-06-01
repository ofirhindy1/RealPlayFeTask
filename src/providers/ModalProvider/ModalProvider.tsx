import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import {
  MODAL_PARAM_KEYS,
  parseModalParams,
  type ActiveModal,
  type ModalContextType,
  type ModalId,
} from './ModalProviderConstants';
import { ModalProviderRoot } from './ModalProviderStyles';
import WelcomeModal from './WelcomeModal/WelcomeModal';
import PromoModal from './PromoModal/PromoModal';
import InviteModal from './InviteModal/InviteModal';


const ModalContext = createContext<ModalContextType | undefined>(undefined);


export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeModals, setActiveModals] = useState<ActiveModal[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const parsed = parseModalParams(params);

    if (parsed.length === 0) {
      setActiveModals([]);
      return;
    }

    if (!isAuthenticated) {
      // Auth-gate: strip modal params from URL and redirect to /register
      const cleanParams = new URLSearchParams(location.search);
      cleanParams.delete(MODAL_PARAM_KEYS.WELCOME);
      cleanParams.delete(MODAL_PARAM_KEYS.PROMO);
      cleanParams.delete(MODAL_PARAM_KEYS.INVITE);

      const registerPath = cleanParams.toString()
        ? `/register?${cleanParams.toString()}`
        : '/register';

      navigate(registerPath, { replace: true });
      return;
    }

    setActiveModals(parsed);
  }, [location.search, isAuthenticated, navigate]);

  const closeModal = useCallback(
    (id: ModalId) => {
      setActiveModals((prev) => prev.filter((m) => m.id !== id));

      const params = new URLSearchParams(location.search);
      const paramKey =
        MODAL_PARAM_KEYS[id.toUpperCase() as keyof typeof MODAL_PARAM_KEYS];
      params.delete(paramKey);

      const newSearch = params.toString();
      navigate(
        {
          pathname: location.pathname,
          search: newSearch ? `?${newSearch}` : '',
        },
        { replace: true },
      );
    },
    [location.search, location.pathname, navigate],
  );

  const value = useMemo<ModalContextType>(
    () => ({ activeModals, closeModal }),
    [activeModals, closeModal],
  );

  const welcomeOpen = activeModals.some((m) => m.id === 'welcome');
  const promoModal = activeModals.find((m) => m.id === 'promo');
  const inviteModal = activeModals.find((m) => m.id === 'invite');

  return (
    <ModalContext.Provider value={value}>
      <ModalProviderRoot>{children}</ModalProviderRoot>

      <WelcomeModal open={welcomeOpen} onClose={() => closeModal('welcome')} />

      {promoModal && (
        <PromoModal
          open
          promoCode={promoModal.payload}
          onClose={() => closeModal('promo')}
        />
      )}

      {inviteModal && (
        <InviteModal
          open
          inviteId={inviteModal.payload}
          onClose={() => closeModal('invite')}
        />
      )}
    </ModalContext.Provider>
  );
};


export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
