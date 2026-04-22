import type { SessionState } from '../model/session';

import type { User } from '@/entities/user';

export function mapUserToSession(user: User | null): SessionState {
  if (!user) {
    return {
      status: 'guest',
      user: null,
    };
  }

  return {
    status: 'authenticated',
    user,
  };
}
