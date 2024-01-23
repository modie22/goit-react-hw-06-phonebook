
import { useState } from 'react';
import css from './Form.module.css';


function ContactForm({onSubmit}) {

  const [nameS,setNameS]= useState('');
  const [numberS,setNumberS]= useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if(name==='name')
    setNameS(value);
    if(name==='number')
    setNumberS(value);
  };

  const  handleSubmit = e => {
    e.preventDefault();
    onSubmit({name:nameS,number:numberS});

    setNameS('')
    setNumberS('')
  };



    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={nameS}
            onChange={handleChange}
            placeholder="Ivan Ivanov"
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="text"
            name="number"
            value={numberS}
            onChange={handleChange}
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
