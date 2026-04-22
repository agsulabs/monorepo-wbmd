import type { SignInResult } from '@/features/auth/sign-in/model';
import type { SignInFormValues } from '@/features/auth/sign-in/model';

export async function signInRequest(_values: SignInFormValues): Promise<SignInResult> {
  return {
    user: {
      id: 'demo-user-id',
      email: 'demo@example.com',
      name: 'Demo User',
    },
  };
}
