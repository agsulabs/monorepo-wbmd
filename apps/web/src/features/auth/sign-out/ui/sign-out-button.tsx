import { useSignOut } from '../model/use-sign-out';

export function SignOutButton() {
  const { signOut } = useSignOut();

  return (
    <button
      type="button"
      onClick={() => {
        void signOut();
      }}
    >
      Sign out
    </button>
  );
}
