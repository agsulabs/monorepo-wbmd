import { UserCard, isAuthenticated } from '@/entities/user';
import { SessionStatus, useSession } from '@/features/auth/session';
import { SignOutButton } from '@/features/auth/sign-out';
import { ProfileShell } from '@/widgets/profile';

export function ProfilePage() {
  const session = useSession();

  if (!isAuthenticated(session.status, session.user)) {
    return (
      <ProfileShell>
        <SessionStatus />
        <div>Guest profile page</div>
      </ProfileShell>
    );
  }

  return (
    <ProfileShell>
      <SessionStatus />
      <UserCard user={session.user} />
      <SignOutButton />
    </ProfileShell>
  );
}
