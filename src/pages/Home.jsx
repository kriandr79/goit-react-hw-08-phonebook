import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Welcome to your personal contacts book!</p>
      <p>To manage your contacts please <Link to="/login">Login</Link> of <Link to="/register">Register</Link>
        </p>
    </div>
  );
};

export default Home;
