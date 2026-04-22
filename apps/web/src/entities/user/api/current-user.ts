import type { User } from '../model';

export type GetCurrentUserResult = User | null;

export async function getCurrentUser(): Promise<GetCurrentUserResult> {
  return {
    id: 'demo-user-id',
    email: 'demo@example.com',
    name: 'Demo User',
  };
}
