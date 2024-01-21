import css from './Button.module.css';

export const Button = ({ children, type, btnstyle, onClick }) => {
  return (
    <button
      type={type}
      className={`${css.button} ${css[btnstyle]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
