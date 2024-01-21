import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Button } from "components/Button/Button";
import css from "./RegisterForm.module.css"

export const RegisterForm = () => {
    const dispatch = useDispatch();
  
  const handleFormSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
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
          <p>Name:</p>
          <input type="text" name="name" required />
        </label>
        <label>
          <p>Email:</p>
          <input type="email" name="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password" required />
        </label>
        <Button type="submit" btnstyle="register">
          Register
        </Button>
      </form>
    </div>
  );
}