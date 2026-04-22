import type { User } from '../model';

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <div>User profile</div>
      <div>ID: {user.id}</div>
      <div>Email: {user.email}</div>
      <div>Name: {user.name}</div>
    </div>
  );
}
