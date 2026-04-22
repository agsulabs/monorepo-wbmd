import type { SessionState } from './session';

import type { User } from '@/entities/user';

export type SessionContextValue = {
  session: SessionState;
  setAuthenticated: (user: User) => void;
  clearSession: () => void;
};
