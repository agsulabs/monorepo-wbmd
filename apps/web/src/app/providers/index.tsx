import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SessionProvider } from './session-provider';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <SessionProvider>{children}</SessionProvider>
    </BrowserRouter>
  );
}
