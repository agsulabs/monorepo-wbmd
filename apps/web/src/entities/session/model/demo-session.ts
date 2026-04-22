import type { SessionState } from './session';

export const demoAuthenticatedSession: SessionState = {
  status: 'authenticated',
  user: {
    id: 'demo-user-id',
    email: 'demo@example.com',
    name: 'Demo User',
  },
};
