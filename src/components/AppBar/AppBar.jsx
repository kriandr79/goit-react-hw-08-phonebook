import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </div>
    </header>
  );
};
