import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

function App() {
  return (
    <>
      <ContactForm />
      <Filter />
      <Loader />
      <ContactList />
    </>
  );
}

export default App;
