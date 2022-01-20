import React, { Component } from 'react';
// import InputPhone from './InputPhone/';
import toast, { Toaster } from 'react-hot-toast';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  static defaultProps = {
    state: {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    },
  };

  state = this.props.state;
  static propTypes = {};

  handleSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;
    const isDubled = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    this.setState(({ contacts }) => {
      if (isDubled) {
        toast(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [
          ...contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      };
    });
  };
  handleDeleteContact = contactId => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contactId !== contact.id),
    });
  };
  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return (
      <Section>
        <Form onSubmit={this.handleSubmitForm} />

        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.handleDeleteContact}
        />
        <Toaster />
      </Section>
    );
  }
}

export default App;
