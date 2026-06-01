

export const MODAL_PARAM_KEYS = {
  WELCOME: 'welcome',
  PROMO: 'promo',
  INVITE: 'invite',
} as const;

export type ModalParamKey = (typeof MODAL_PARAM_KEYS)[keyof typeof MODAL_PARAM_KEYS];


export type ModalId = 'welcome' | 'promo' | 'invite';


export interface ActiveModal {
  id: ModalId;
  /** The raw param value (e.g. promo code or invite id). */
  payload: string;
}


export interface ModalContextType {
  activeModals: ActiveModal[];
  closeModal: (id: ModalId) => void;
}


/**
 * Reads the three supported modal params from a URLSearchParams instance and
 * returns an ordered list of active modals.
 */
export const parseModalParams = (params: URLSearchParams): ActiveModal[] => {
  const modals: ActiveModal[] = [];

  const welcome = params.get(MODAL_PARAM_KEYS.WELCOME);
  if (welcome === '1') modals.push({ id: 'welcome', payload: '1' });

  const promo = params.get(MODAL_PARAM_KEYS.PROMO);
  if (promo) modals.push({ id: 'promo', payload: promo });

  const invite = params.get(MODAL_PARAM_KEYS.INVITE);
  if (invite) modals.push({ id: 'invite', payload: invite });

  return modals;
};
