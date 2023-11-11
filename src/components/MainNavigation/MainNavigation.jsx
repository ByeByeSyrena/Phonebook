import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const MainNavigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <List>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        {token && (
          <ListItem>
            <NavLink to="/contacts">Contacts</NavLink>
          </ListItem>
        )}
      </List>
    </nav>
  );
};
