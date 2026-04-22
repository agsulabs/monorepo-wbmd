import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';

import type { User } from '@/entities/user';
import { SessionContext, initialSessionState, useSessionBootstrap } from '@/features/auth/session';

type SessionProviderProps = {
  children: ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  const bootstrappedSession = useSessionBootstrap();
  const [session, setSession] = useState(initialSessionState);

  useEffect(() => {
    setSession(bootstrappedSession);
  }, [bootstrappedSession]);

  const value = useMemo(
    () => ({
      session,
      setAuthenticated: (user: User) => {
        setSession({
          status: 'authenticated',
          user,
        });
      },
      clearSession: () => {
        setSession(initialSessionState);
      },
    }),
    [session],
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
