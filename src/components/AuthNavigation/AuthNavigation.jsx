import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const AuthNavigation = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.blue' }}>
      <List>
        <ListItem>
          <NavLink to="/register">Sign Up</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/login">Sign In</NavLink>
        </ListItem>
      </List>
    </Box>
  );
};
