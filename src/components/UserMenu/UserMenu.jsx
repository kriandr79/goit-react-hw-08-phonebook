import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      Welcome, {user.name}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
