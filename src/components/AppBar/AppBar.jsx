import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
    </header>
  );
};
