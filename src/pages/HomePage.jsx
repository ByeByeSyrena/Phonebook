import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

export const HomePage = () => {
  const token = useSelector(selectToken);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {token ? (
        <Typography variant="h4" component="h4">
          Go to see your contacts.
        </Typography>
      ) : (
        <Typography variant="h4" component="h4">
          Welcome to Phone App! Please, log in or sign up to see your contacts.
        </Typography>
      )}
    </Box>
  );
};
