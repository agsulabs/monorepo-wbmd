import type { SignUpResult } from './result';
import type { SignUpFormValues } from './types';

import { useSessionActions } from '@/features/auth/session';
import { signUpRequest } from '@/features/auth/sign-up/api';

export function useSignUp() {
  const { setAuthenticated } = useSessionActions();

  async function signUp(values: SignUpFormValues): Promise<SignUpResult> {
    const result = await signUpRequest(values);

    setAuthenticated(result.user);

    return result;
  }

  return { signUp };
}
