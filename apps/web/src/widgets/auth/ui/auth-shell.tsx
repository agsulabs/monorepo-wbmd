import type { ReactNode } from 'react';

import { AppNav } from '@/shared/ui';

type AuthShellProps = {
  title: string;
  children: ReactNode;
};

export function AuthShell({ title, children }: AuthShellProps) {
  return (
    <section>
      <AppNav />
      <h1>{title}</h1>
      {children}
    </section>
  );
}
