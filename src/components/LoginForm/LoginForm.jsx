import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css'
import { Button } from 'components/Button/Button';

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
    <div className={css.formdiv}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label>
          <p>Email:</p>
          <input type="email" name="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password" required />
        </label>
        <Button type="submit" btnstyle="login">
          Login
        </Button>
      </form>
    </div>
  );
};
