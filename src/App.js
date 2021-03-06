import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useLocaleStorage } from '../src/hooks/useLocaleStorage';

const Title = ['Title'];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocaleStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const formSubmitHandler = ({ name, number }) => {
    const addContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${addContact.name} уже есть`);
      return;
    }
    setContacts([addContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContactList = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <Container>
      <h1 className={Title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={Title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContactList()}
        onDeleteContact={deleteContactList}
      />
    </Container>
  );
}
