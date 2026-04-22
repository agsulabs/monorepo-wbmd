import { initialSignInFormValues } from './types';

export function useSignInForm() {
  return {
    values: initialSignInFormValues,
    isSubmitting: false,
  };
}
