import css from './List.module.css';
import {remove} from '../../redux/contactSlice';
import { useSelector ,useDispatch } from 'react-redux';

function ContactList() {
  const dispatch = useDispatch();
  const contactsR = useSelector(state=>state.contact.value);
  const filterR = useSelector(state=>state.contact.filter);
  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const getVisibleContacts = () => {
    return contactsR.filter(contact =>
      contact.name.toLowerCase().includes(filterR)
    );
  };
  return (
    <ul className={css.list}>
      {getVisibleContacts().map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete{' contact '}
          </button>
        </li>
      ))}
    </ul>
  );
}
//

export default ContactList;
