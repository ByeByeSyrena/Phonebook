import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../operations';
import { selectAllContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const nameValue = event.target.name.value;
    const numberValue = event.target.number.value;

    if (nameValue) {
      const existingContact = contacts.find(contact => {
        if (contact.name) {
          return contact.name.toLowerCase() === nameValue.toLowerCase();
        }
        return false;
      });

      if (existingContact) {
        alert(`${nameValue} is already in contacts`);
        return;
      }
    }

    const contactData = {
      id: nanoid(),
      name: nameValue,
      number: numberValue,
    };

    dispatch(addContact(contactData));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h1>Phonebook</h1>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
