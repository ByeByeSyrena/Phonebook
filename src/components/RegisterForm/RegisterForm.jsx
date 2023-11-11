import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(registerThunk(user));
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
        label="Name"
        type="text"
        name="name"
      />

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
