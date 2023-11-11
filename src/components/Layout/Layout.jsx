import { Outlet } from 'react-router-dom';
import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        <MainNavigation />
        {token ? <UserMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
