import { useSelector, useDispatch } from 'react-redux';

import { getItems } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import { dataCapture, resetForm } from '../../shared/functions/onFormFn';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

import s from './FormContacts.module.css';

const FormContacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  function handleSubmit(e) {
    e.preventDefault();

    const contact = dataCapture(e);

    const { name, number } = contact;

    if (!name || !number) {
      return alert('Please fill the form');
    }

    checkContact(contact);

    resetForm('contactForm');
  }

  function checkContact(contact) {
    const { name } = contact;
    const lowerCaseName = name.toLowerCase();

    const findInArray = items.find(({ name }) => {
      const lowerCaseStateName = name.toLowerCase();
      return lowerCaseStateName === lowerCaseName;
    });

    if (findInArray) {
      return alert(`${name} is already in your contacts!`);
    }

    dispatch(addContact(contact));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form} id="contactForm">
        <Input
          labelName="Name"
          type="text"
          name={'name'}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholderValue="Jane Doe"
        />

        <Input
          labelName="Number"
          type="tel"
          name={'number'}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholderValue="+38-099-123-45-67"
        />

        <Button type="submit" text="Add contact" />
      </form>
    </>
  );
};

export default FormContacts;
