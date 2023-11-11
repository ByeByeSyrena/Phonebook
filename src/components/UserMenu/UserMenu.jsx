import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      gap="10px"
      alignItems="center"
      flexDirection="row"
      marginLeft="50px"
    >
      <Typography>Hello, {user.name}!</Typography>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Log out
      </Button>
    </Box>
  );
};
