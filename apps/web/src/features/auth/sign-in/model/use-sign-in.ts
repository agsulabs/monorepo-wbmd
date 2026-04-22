import type { SignInResult } from './result';
import type { SignInFormValues } from './types';

import { useSessionActions } from '@/entities/session';
import { signInRequest } from '@/features/auth/sign-in/api';

export function useSignIn() {
  const { setAuthenticated } = useSessionActions();

  async function signIn(values: SignInFormValues): Promise<SignInResult> {
    const result = await signInRequest(values);

    setAuthenticated(result.user);

    return result;
  }

  return { signIn };
}
