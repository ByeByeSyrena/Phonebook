import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(loginThunk(user));
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        name="email"
      />

      <TextField
        required
        id="outlined-required"
        label="Password"
        type="password"
        name="password"
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
};
