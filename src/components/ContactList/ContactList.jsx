import { useSelector, useDispatch } from 'react-redux';
import { memo } from 'react';
import toonavatar from 'cartoon-avatar';

import { deleteContact } from '../../redux/contacts/itemsOperations';
import { getFilter, getItems } from '../../redux/contacts/contactsSelectors';
import Button from '../../shared/components/Button';

import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  function filterContactsHandler() {
    const lowerCaseFilter = filter.toLowerCase();

    const filteredContacts = items.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });

    return filteredContacts;
  }

  return (
    <ul className={s.contactList}>
      {filterContactsHandler().map(({ id, name, phone }) => (
        <li key={id} className={s.contactItem}>
          <img src={toonavatar.generate_avatar()} alt="img" width="60" className={s.contactImg} />
          <div>
            <p>{name}:</p>
            <p>{phone}</p>
          </div>

          <Button type="button" text="&#128473;" onClick={() => dispatch(deleteContact(id))} />
        </li>
      ))}
    </ul>
  );
};

export default memo(ContactList);
