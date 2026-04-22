import { useSessionActions } from '@/entities/session';
import { signOutRequest } from '@/features/auth/sign-out/api';

export function useSignOut() {
  const { clearSession } = useSessionActions();

  async function signOut() {
    await signOutRequest();
    clearSession();
  }

  return { signOut };
}
