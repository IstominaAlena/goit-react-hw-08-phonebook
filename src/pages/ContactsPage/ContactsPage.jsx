import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/contacts/contactsOperations';
import { getStatus } from '../../redux/contacts/contactsSelectors';

import Section from '../../shared/components/Section';
import FormContacts from '../../components/FormContacts';
import FilterInput from '../../components/FilterInput';
import ContactList from '../../components/ContactList';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';

const ContactPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      <Section title={'Phonebook'} classEl={'phonebook'}>
        <FormContacts />
        <FilterInput />
      </Section>

      <Section title={'Contacts'} classEl={'contacts'}>
        {status === 'rejected' && <Error text="contacts" />}
        {status === 'resolved' && <ContactList />}
      </Section>
    </>
  );
};

export default ContactPage;
