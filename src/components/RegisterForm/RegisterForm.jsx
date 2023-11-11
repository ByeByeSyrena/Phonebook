import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

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
