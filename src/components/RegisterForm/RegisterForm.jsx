import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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
    <form className="" onSubmit={handleFormSubmit}>
      <label>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        <p>Email:</p>
        <input
          type="email"
          name="email"
          required
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          name="password"
          required
        />
      </label>
      <button className="" type="submit">
        Register
      </button>
    </form>
  );
}