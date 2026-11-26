import {useSyncExternalStore} from 'react';

export type VtpassEnv = 'sandbox' | 'live';

export const BASE_URLS: Record<VtpassEnv, string> = {
  sandbox: 'https://sandbox.vtpass.com',
  live: 'https://vtpass.com',
};

const STORAGE_KEY = 'vtpass-docs-env';
const CHANGE_EVENT = 'vtpass-env-change';
const DEFAULT_ENV: VtpassEnv = 'sandbox';

function readEnv(): VtpassEnv {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'live' ? 'live' : DEFAULT_ENV;
  } catch {
    return DEFAULT_ENV;
  }
}

export function setVtpassEnv(env: VtpassEnv): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, env);
  } catch {
    // Storage can be blocked (private mode). The switch still works for this page view.
    memoryEnv = env;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

let memoryEnv: VtpassEnv | null = null;

function subscribe(onChange: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener('storage', onStorage); // Keep other tabs in sync
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onStorage);
  };
}

/** Current environment. Renders as sandbox on the server, then the saved choice on the client. */
export function useVtpassEnv(): VtpassEnv {
  return useSyncExternalStore(
    subscribe,
    () => memoryEnv ?? readEnv(),
    () => DEFAULT_ENV,
  );
}

/**
 * Rewrites sandbox URLs in a code sample to live URLs.
 * Only `https://` URLs change, so sample emails like sandbox@sandbox.vtpass.com stay as they are.
 */
export function toLiveCode(code: string): string {
  return code
    .replace(/https:\/\/sandbox\.vtpass\.com/g, BASE_URLS.live)
    .replace(
      /(?:Switch to|Use) https:\/\/vtpass\.com(\S*) for live/g,
      `Live URL. Use ${BASE_URLS.sandbox}$1 for testing`,
    );
}
