import { Link } from 'react-router-dom';

import { appRoutes } from '@/shared/config/routes';

export function AuthNav() {
  return (
    <nav>
      <Link to={appRoutes.signIn}>Sign in</Link> <Link to={appRoutes.signUp}>Sign up</Link>{' '}
      <Link to={appRoutes.profile}>Profile</Link>
    </nav>
  );
}
