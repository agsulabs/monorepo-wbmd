import type { AuthStatus, User } from '../model';

export function isAuthenticated(status: AuthStatus, user: User | null): user is User {
  return status === 'authenticated' && user !== null;
}
