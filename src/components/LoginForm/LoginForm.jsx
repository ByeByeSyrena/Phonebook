import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
