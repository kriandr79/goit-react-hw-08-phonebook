import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import css from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const handleInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('ERROR');
    }
  };

  // Сабміт форми - додаємо контакт
  const handleFormSubmit = e => {
    e.preventDefault();
    if (contactsList.find(contact => contact.name === name)) {
      alert(`${name} is already exist in the numberbook!`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>numberbook</h2>
      <div className={css.formdiv}>
        <form className={css.form} onSubmit={handleFormSubmit}>
          <label>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInput}
              required
            />
          </label>
          <label>
            <p>Number:</p>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleInput}
              pattern="[0-9\-]+"
              required
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
