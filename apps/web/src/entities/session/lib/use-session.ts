import { useContext } from 'react';

import { SessionContext } from '../model/session-context';

export function useSession() {
  const { session } = useContext(SessionContext);

  return session;
}
