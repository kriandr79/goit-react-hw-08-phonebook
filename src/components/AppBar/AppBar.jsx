import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav className={css.nav}>
        <div className={css.mainMenu}>
          <Link to="/">Home</Link>
          <Link to="/contacts">My Contacts</Link>
        </div>
        <div className={css.userMenu}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
    </header>
  );
};
