import type { SignUpResult } from '@/features/auth/sign-up/model';
import type { SignUpFormValues } from '@/features/auth/sign-up/model';

export async function signUpRequest(_values: SignUpFormValues): Promise<SignUpResult> {
  return {
    user: {
      id: 'demo-user-id',
      email: 'demo@example.com',
      name: 'Demo User',
    },
  };
}
