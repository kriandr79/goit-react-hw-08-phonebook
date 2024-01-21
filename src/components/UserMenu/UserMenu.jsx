import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button } from 'components/Button/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      Welcome, {user.name}
      <Button type="button" btnstyle="logout" onClick={handleLogOut}>
        Logout
      </Button>
    </>
  );
};
