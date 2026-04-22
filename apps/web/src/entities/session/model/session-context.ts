import { createContext } from 'react';

import type { SessionContextValue } from './context-value';
import { demoAuthenticatedSession } from './demo-session';

import type { User } from '@/entities/user';

const noop = () => {};

const setAuthenticated = (_user: User) => {
  noop();
};

export const SessionContext = createContext<SessionContextValue>({
  session: demoAuthenticatedSession,
  setAuthenticated,
  clearSession: noop,
});
