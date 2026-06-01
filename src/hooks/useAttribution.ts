import { useEffect } from 'react';


const ATTRIBUTION_KEY = 'realplay_attribution_data';
const ATTRIBUTION_EXPIRY_KEY = 'realplay_attribution_expiry';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Explicit tracked params. Any additional utm_* params are captured dynamically.
 */
const EXPLICIT_PARAMS = ['ref', 'gclid', 'fbclid'] as const;


export interface AttributionData {
  [key: string]: string;
}


/**
 * Returns stored first-touch attribution data from LocalStorage,
 * or null if nothing has been stored yet.
 */
export const getStoredAttribution = (): AttributionData | null => {
  try {
    const raw = localStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as AttributionData) : null;
  } catch {
    return null;
  }
};


/** Extracts all trackable params from the current URL search string. */
const captureParams = (searchParams: URLSearchParams): AttributionData => {
  const data: AttributionData = {};

  // Dynamic utm_* capture
  searchParams.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      data[key] = value;
    }
  });

  // Explicit params
  EXPLICIT_PARAMS.forEach((param) => {
    const value = searchParams.get(param);
    if (value) data[param] = value;
  });

  return data;
};

const hasParams = (data: AttributionData): boolean =>
  Object.keys(data).length > 0;

const persistAttribution = (data: AttributionData): void => {
  localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  localStorage.setItem(
    ATTRIBUTION_EXPIRY_KEY,
    String(Date.now() + THIRTY_DAYS_MS),
  );
};


/**
 * Captures first-touch marketing attribution parameters from the URL and
 * persists them in LocalStorage.
 *
 * Rules:
 *  - First visit: store params + record 30-day expiry timestamp.
 *  - Return within 30 days (still unregistered): keep existing first-touch data
 *    (new params are ignored).
 *  - Return after 30 days (still unregistered): overwrite data and reset clock.
 *
 * The hook runs only on cold load (empty dependency array) and should be
 * called once near the top of the component tree.
 */
export const useAttribution = (): void => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const newParams = captureParams(searchParams);

    // Nothing to store if the URL carries no attribution params
    if (!hasParams(newParams)) return;

    const existingRaw = localStorage.getItem(ATTRIBUTION_KEY);
    const expiryRaw = localStorage.getItem(ATTRIBUTION_EXPIRY_KEY);

    const hasExistingData = existingRaw !== null;
    const expiryTime = expiryRaw ? parseInt(expiryRaw, 10) : 0;
    const isExpired = Date.now() > expiryTime;

    if (!hasExistingData || isExpired) {
      // First visit OR data has expired – store fresh attribution
      persistAttribution(newParams);
    }
    // If data exists and has NOT expired, honour the first-touch rule (no-op)
  }, []);
};
