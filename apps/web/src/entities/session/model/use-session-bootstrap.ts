import { useEffect, useState } from 'react';

import { getSessionRequest } from '../api';

import { initialSessionState, type SessionState } from './session';

export function useSessionBootstrap() {
  const [session, setSession] = useState<SessionState>(initialSessionState);

  useEffect(() => {
    let alive = true;

    (async () => {
      const nextSession = await getSessionRequest();

      if (!alive) return;

      setSession(nextSession);
    })();

    return () => {
      alive = false;
    };
  }, []);

  return session;
}
