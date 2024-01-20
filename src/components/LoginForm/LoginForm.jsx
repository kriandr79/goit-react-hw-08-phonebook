import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="" onSubmit={handleFormSubmit}>
      <label>
        <p>Email:</p>
        <input type="email" name="email" required />
      </label>
      <label>
        <p>Password:</p>
        <input type="password" name="password" required />
      </label>
      <button className="" type="submit">
        Login
      </button>
    </form>
  );
};
