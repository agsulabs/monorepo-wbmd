import { useSession } from '../lib/use-session';

export function SessionStatus() {
  const session = useSession();

  return <div>Session status: {session.status}</div>;
}
