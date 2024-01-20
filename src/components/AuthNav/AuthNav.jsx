import { Link } from "react-router-dom";

export const AuthNav = () => {

    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
}