export type UserId = string;

export type User = {
  id: UserId;
  email: string;
  name: string;
};

export type AuthStatus = 'unknown' | 'authenticated' | 'guest';
