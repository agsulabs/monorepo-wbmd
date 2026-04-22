import { useSignUp } from '../model/use-sign-up';
import { useSignUpForm } from '../model/use-sign-up-form';

export function SignUpForm() {
  const { values, isSubmitting } = useSignUpForm();
  const { signUp } = useSignUp();

  return (
    <div>
      <div>Sign up form</div>
      <div>Submitting: {isSubmitting ? 'yes' : 'no'}</div>
      <button
        type="button"
        onClick={() => {
          void signUp(values);
        }}
      >
        Submit sign up
      </button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
