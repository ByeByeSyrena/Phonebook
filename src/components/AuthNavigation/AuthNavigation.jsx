import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/register">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Sign In</NavLink>
      </li>
    </ul>
  );
};
