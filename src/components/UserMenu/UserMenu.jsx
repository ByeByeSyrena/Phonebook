import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <p>Hello, {user.name}!</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Log out
      </button>
    </>
  );
};
