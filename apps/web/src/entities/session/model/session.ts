import type { AuthStatus, User } from '@/entities/user';

export type SessionState = {
  status: AuthStatus;
  user: User | null;
};

export const initialSessionState: SessionState = {
  status: 'guest',
  user: null,
};
