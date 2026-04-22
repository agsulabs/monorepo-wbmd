import type { ReactNode } from 'react';

import { AppNav } from '@/shared/ui';

type ProfileShellProps = {
  children: ReactNode;
};

export function ProfileShell({ children }: ProfileShellProps) {
  return (
    <section>
      <AppNav />
      <h1>Profile</h1>
      {children}
    </section>
  );
}
