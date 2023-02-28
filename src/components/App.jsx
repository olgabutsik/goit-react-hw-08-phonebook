import React from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact, setNewContact } from '../redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const addName = ({ name, number }) => {
    const isRepeated = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isRepeated) {
      alert(`${isRepeated.name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    dispatch(setNewContact(contact));
  };

  const deleteName = id => {
    dispatch(deleteContact(id));
  };

  const selectedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <Section title="Phonebook">
        <Form getValue={addName}></Form>
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter
              title="Find contacts by name"
              handleFilter={handleFilter}
              filterValue={filter}
            />
            <ContactsList
              findContact={selectedContacts}
              deleteContact={deleteName}
            />
          </>
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </Section>
    </>
  );
}
