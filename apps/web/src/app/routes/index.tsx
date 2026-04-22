import { Route, Routes } from 'react-router-dom';

import { SessionGuard } from './guards/session-guard';

import { ProfilePage } from '@/pages/profile';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { appRoutes } from '@/shared/config/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={appRoutes.home} element={<SignInPage />} />
      <Route path={appRoutes.signIn} element={<SignInPage />} />
      <Route path={appRoutes.signUp} element={<SignUpPage />} />
      <Route
        path={appRoutes.profile}
        element={
          <SessionGuard>
            <ProfilePage />
          </SessionGuard>
        }
      />
    </Routes>
  );
}
