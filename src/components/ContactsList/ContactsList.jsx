import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/contacts/filterSlice';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsList.module.css'
import { Button } from 'components/Button/Button';

function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contactsList = useSelector(getContacts);

  // Завантаження списку контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Видалення контакту
  const removeContact = contactId => dispatch(deleteContact(contactId));

  // Отримання відфільтрованих контактів
  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );

  console.log(filteredContacts)
  return filteredContacts.length > 0 ? (
    <>
      <h2>Conctacts ({filteredContacts.length}):</h2>

      <ul className={css.contactslist}>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={css.items}>
            <span className={css.name}>{name}</span>
            <span className={css.number}>{number}</span>
            <Button type="submit" btnstyle="delete" onClick={() => removeContact(id)}>
              delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>No contacts have found...</h2>
  );
}

export default ContactList;
