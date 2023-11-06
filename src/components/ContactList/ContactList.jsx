import SelectedContact from 'components/SelectedContact/SelectedContact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectAllContacts } from 'redux/selectors';
import { getAllContacts } from '../../operations';
import { useEffect } from 'react';

const getVisibleContacts = (contacts, normalizedFilter) => {
  if (!contacts) {
    return [];
  }

  return contacts.filter(({ name }) => {
    if (typeof name === 'string') {
      return name.toLowerCase().includes(normalizedFilter);
    }
    return false;
  });
};

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter ? filter.toLowerCase() : '';
  const visibleContacts = getVisibleContacts(contacts, normalizedFilter);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <SelectedContact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
