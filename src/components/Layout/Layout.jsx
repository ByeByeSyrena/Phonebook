import { Outlet } from 'react-router-dom';
import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MainNavigation />
            {token ? <UserMenu /> : <AuthNavigation />}
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  );
};
