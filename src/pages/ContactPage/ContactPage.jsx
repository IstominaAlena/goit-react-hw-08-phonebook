import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getContacts } from '../../redux/contacts/itemsOperations';

import Section from '../../shared/components/Section';
import FormContacts from '../../components/FormContacts';
import FilterInput from '../../components/FilterInput';
import ContactList from '../../components/ContactList';

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'} classEl={'phonebook'}>
        <FormContacts />
        <FilterInput />
      </Section>

      <Section title={'Contacts'} classEl={'contacts'}>
        <ContactList />
      </Section>
    </>
  );
};

export default ContactPage;
