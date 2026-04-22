import { initialSignUpFormValues } from './types';

export function useSignUpForm() {
  return {
    values: initialSignUpFormValues,
    isSubmitting: false,
  };
}
