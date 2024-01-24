//import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { changeName, changeNumber } from '../../redux/contactSlice';

function ContactForm() {
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(changeName(formData.get('name')));
    dispatch(changeNumber(formData.get('number')));
    e.currentTarget.reset();
    
  };
 console.log(123)
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="text"
          name="number"
          placeholder="380*********"
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
