import { useContext } from 'react';

import { SessionContext } from '../model/session-context';

export function useSessionActions() {
  const { setAuthenticated, clearSession } = useContext(SessionContext);

  return {
    setAuthenticated,
    clearSession,
  };
}
