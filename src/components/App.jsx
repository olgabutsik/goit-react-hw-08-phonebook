import Section from './Section/Section';
import Form from './Form/Form';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { selectFilter } from 'redux/filter/selector';
import { getContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const selectedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form></Form>
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter title="Find contacts by name" />
            <ContactsList currentContacts={selectedContacts} />
          </>
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </Section>
    </>
  );
};
