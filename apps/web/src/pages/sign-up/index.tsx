import { SignUpForm } from '@/features/auth/sign-up';
import { AuthShell } from '@/widgets/auth';

export function SignUpPage() {
  return (
    <AuthShell title="Sign up">
      <SignUpForm />
    </AuthShell>
  );
}
