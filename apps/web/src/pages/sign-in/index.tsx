import { SignInForm } from '@/features/auth/sign-in';
import { AuthShell } from '@/widgets/auth';

export function SignInPage() {
  return (
    <AuthShell title="Sign in">
      <SignInForm />
    </AuthShell>
  );
}
