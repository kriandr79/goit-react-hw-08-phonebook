import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/contacts/filterSlice';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';

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

  return (
    <>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button type="button" onClick={() => removeContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
