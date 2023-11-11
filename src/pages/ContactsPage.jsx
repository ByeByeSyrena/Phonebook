import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

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

export const ContactsPage = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter ? filter.toLowerCase() : '';
  const visibleContacts = getVisibleContacts(contacts, normalizedFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList contacts={visibleContacts} />
    </>
  );
};
