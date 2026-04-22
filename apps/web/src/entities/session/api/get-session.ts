import { mapUserToSession } from '../lib/map-user-to-session';

import { getCurrentUser } from '@/entities/user';

export async function getSessionRequest() {
  const user = await getCurrentUser();

  return mapUserToSession(user);
}
