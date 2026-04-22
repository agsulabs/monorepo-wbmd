import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useSession } from '../lib/use-session';

import { isAuthenticated } from '@/entities/user';
import { appRoutes } from '@/shared/config/routes';

type SessionGuardProps = {
  children: ReactNode;
};

export function SessionGuard({ children }: SessionGuardProps) {
  const session = useSession();

  if (!isAuthenticated(session.status, session.user)) {
    return <Navigate to={appRoutes.signIn} replace />;
  }

  return <>{children}</>;
}
