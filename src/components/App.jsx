
import shortid from 'shortid';
import Container from './Container/Container';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './List/List';
import { useSelector ,useDispatch } from 'react-redux';
import { update,remove,filterSearch } from '../redux/contactSlice';

function App() {
  const dispatch = useDispatch();
  const contactsR = useSelector(state=>state.contact.value);
  const filterR = useSelector(state=>state.contact.filter)

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contactsR.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contactsR.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (contact.number.toString().length !== 12) {
      alert(`The number must contain 12 numbers!`);
    } else if (!/^(38)?0[0-9]{9}$/g.test(number)) {
      alert('The phone number must start with 380!');
    } else {
      dispatch(update(contact));
    }
  };
 console.log(filterR);
  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const changeFilter = e => {
    dispatch(filterSearch(e.currentTarget.value))
  };

  const getVisibleContacts = () => {
    return contactsR.filter(contact =>
      contact.name.toLowerCase().includes(filterR)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contactsR.length > 1 && <Filter value={filterR} onChange={changeFilter} />}
      {contactsR.length > 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
}

export default App;
