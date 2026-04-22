import { useSignIn } from '../model/use-sign-in';
import { useSignInForm } from '../model/use-sign-in-form';

export function SignInForm() {
  const { values, isSubmitting } = useSignInForm();
  const { signIn } = useSignIn();

  return (
    <div>
      <div>Sign in form</div>
      <div>Submitting: {isSubmitting ? 'yes' : 'no'}</div>
      <button
        type="button"
        onClick={() => {
          void signIn(values);
        }}
      >
        Submit sign in
      </button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
